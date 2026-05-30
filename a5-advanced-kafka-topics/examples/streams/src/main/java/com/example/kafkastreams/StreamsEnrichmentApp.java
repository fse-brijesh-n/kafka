package com.example.kafkastreams;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.Topology;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.kstream.KTable;
import org.apache.kafka.streams.kstream.Materialized;
import org.apache.kafka.streams.kstream.Produced;

import java.util.Properties;

public class StreamsEnrichmentApp {
    public static final String EVENTS_TOPIC = "user-events";
    public static final String PROFILES_TOPIC = "user-profiles";
    public static final String OUTPUT_TOPIC = "enriched-events";

    private static final ObjectMapper mapper = new ObjectMapper();

    public static void main(String[] args) {
        String bootstrap = System.getProperty("bootstrap.servers", System.getenv().getOrDefault("BOOTSTRAP_SERVERS", "localhost:9092"));
        Properties props = new Properties();
        props.put("application.id", "streams-enrichment-app");
        props.put("bootstrap.servers", bootstrap);
        props.put("default.key.serde", Serdes.String().getClass().getName());
        props.put("default.value.serde", Serdes.String().getClass().getName());

        StreamsBuilder builder = new StreamsBuilder();

        KTable<String, String> profiles = builder.table(PROFILES_TOPIC, Materialized.as("profiles-store"));

        KStream<String, String> events = builder.stream(EVENTS_TOPIC);

        KStream<String, String> enriched = events.leftJoin(profiles, (event, profile) -> {
            try {
                JsonNode ev = mapper.readTree(event);
                JsonNode prof = profile == null ? null : mapper.readTree(profile);
                // Build enriched JSON
                com.fasterxml.jackson.databind.node.ObjectNode out = mapper.createObjectNode();
                out.set("event", ev);
                out.set("profile", prof == null ? mapper.nullNode() : prof);
                return mapper.writeValueAsString(out);
            } catch (Exception e) {
                return event;
            }
        });

        enriched.to(OUTPUT_TOPIC, Produced.with(Serdes.String(), Serdes.String()));

        Topology topology = builder.build();
        KafkaStreams streams = new KafkaStreams(topology, props);
        streams.start();

        Runtime.getRuntime().addShutdownHook(new Thread(streams::close));
    }
}
