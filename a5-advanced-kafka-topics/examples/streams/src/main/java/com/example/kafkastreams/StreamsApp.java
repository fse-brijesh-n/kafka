package com.example.kafkastreams;

import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.Topology;
import org.apache.kafka.streams.kstream.Materialized;
import org.apache.kafka.streams.kstream.TimeWindows;
import org.apache.kafka.streams.kstream.Windowed;
import org.apache.kafka.streams.kstream.Named;
import org.apache.kafka.streams.kstream.Produced;
import org.apache.kafka.streams.kstream.Serialized;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.kstream.KTable;
import org.apache.kafka.streams.kstream.KGroupedStream;

import java.time.Duration;
import java.util.Properties;

public class StreamsApp {

    public static final String INPUT_TOPIC = "events";
    public static final String OUTPUT_TOPIC = "user-counts";

    public static void main(String[] args) {
        String bootstrap = System.getProperty("bootstrap.servers", System.getenv().getOrDefault("BOOTSTRAP_SERVERS", "localhost:9092"));
        Properties props = new Properties();
        props.put("application.id", "streams-example-app");
        props.put("bootstrap.servers", bootstrap);
        props.put("default.key.serde", Serdes.String().getClass().getName());
        props.put("default.value.serde", Serdes.String().getClass().getName());

        StreamsBuilder builder = new StreamsBuilder();

        KStream<String, String> events = builder.stream(INPUT_TOPIC);

        KGroupedStream<String, String> byUser = events
                .map((k, v) -> new org.apache.kafka.streams.KeyValue<>(v, v)) // assume value is userId for demo
                .groupByKey(Serialized.with(Serdes.String(), Serdes.String()));

        byUser
                .windowedBy(TimeWindows.ofSizeWithNoGrace(Duration.ofMinutes(1)))
                .count(Materialized.as("user-counts-store"))
                .toStream()
                .map((Windowed<String> w, Long count) -> new org.apache.kafka.streams.KeyValue<>(w.key(), Long.toString(count)))
                .to(OUTPUT_TOPIC, Produced.with(Serdes.String(), Serdes.String()));

        Topology topology = builder.build();
        KafkaStreams streams = new KafkaStreams(topology, props);
        streams.start();

        Runtime.getRuntime().addShutdownHook(new Thread(streams::close));
    }
}
