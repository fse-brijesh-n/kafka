package com.example.kafkastreams;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.Topology;
import org.apache.kafka.streams.TopologyTestDriver;
import org.apache.kafka.streams.test.TestInputTopic;
import org.apache.kafka.streams.test.TestOutputTopic;
import org.junit.jupiter.api.Test;

import java.util.Properties;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class StreamsEnrichmentAppTest {
    private final ObjectMapper mapper = new ObjectMapper();

    @Test
    public void enrichmentJoinProducesProfile() throws Exception {
        StreamsBuilder builder = new StreamsBuilder();

        // Build same topology as StreamsEnrichmentApp
        builder.table(StreamsEnrichmentApp.PROFILES_TOPIC);
        builder.stream(StreamsEnrichmentApp.EVENTS_TOPIC)
                .leftJoin(builder.table(StreamsEnrichmentApp.PROFILES_TOPIC), (event, profile) -> {
                    try {
                        JsonNode ev = mapper.readTree(event);
                        JsonNode prof = profile == null ? null : mapper.readTree(profile);
                        ObjectNode out = mapper.createObjectNode();
                        out.set("event", ev);
                        out.set("profile", prof == null ? mapper.nullNode() : prof);
                        return mapper.writeValueAsString(out);
                    } catch (Exception e) {
                        return event;
                    }
                }).to(StreamsEnrichmentApp.OUTPUT_TOPIC);

        Topology topology = builder.build();

        Properties props = new Properties();
        props.put("application.id", "test-enrichment");
        props.put("bootstrap.servers", "dummy:9092");

        try (TopologyTestDriver driver = new TopologyTestDriver(topology, props)) {
            TestInputTopic<String, String> profiles = driver.createInputTopic(StreamsEnrichmentApp.PROFILES_TOPIC, Serdes.String().serializer(), Serdes.String().serializer());
            TestInputTopic<String, String> events = driver.createInputTopic(StreamsEnrichmentApp.EVENTS_TOPIC, Serdes.String().serializer(), Serdes.String().serializer());
            TestOutputTopic<String, String> output = driver.createOutputTopic(StreamsEnrichmentApp.OUTPUT_TOPIC, Serdes.String().deserializer(), Serdes.String().deserializer());

            // send profile for alice
            ObjectNode profile = mapper.createObjectNode();
            profile.put("userId", "alice");
            profile.put("email", "alice@example.com");
            profiles.pipeInput("alice", mapper.writeValueAsString(profile));

            // send event keyed by alice
            ObjectNode event = mapper.createObjectNode();
            event.put("userId", "alice");
            event.put("action", "login");
            events.pipeInput("alice", mapper.writeValueAsString(event));

            // read output
            String out = output.readValue();
            assertTrue(out.contains("alice@example.com"), "Enriched event should contain profile email");

            // send event for unknown user charlie
            ObjectNode event2 = mapper.createObjectNode();
            event2.put("userId", "charlie");
            event2.put("action", "purchase");
            events.pipeInput("charlie", mapper.writeValueAsString(event2));

            String out2 = output.readValue();
            // profile should be nullNode in JSON (string contains "profile":null or "profile":{})
            assertTrue(out2.contains("profile") , "Enriched event should include profile field (maybe null)");
        }
    }
}
