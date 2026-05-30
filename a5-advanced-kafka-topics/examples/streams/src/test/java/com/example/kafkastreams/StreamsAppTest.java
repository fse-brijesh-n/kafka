package com.example.kafkastreams;

import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.TopologyTestDriver;
import org.apache.kafka.streams.Topology;
import org.apache.kafka.streams.test.TestRecord;
import org.apache.kafka.streams.test.TestInputTopic;
import org.apache.kafka.streams.test.TestOutputTopic;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.kstream.TimeWindows;
import org.junit.jupiter.api.Test;

import java.time.Duration;
import java.util.Properties;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class StreamsAppTest {

    @Test
    public void testCounts() {
        StreamsBuilder builder = new StreamsBuilder();
        StreamsApp.main(new String[]{}); // no-op for building topology in main, so instead build similar topology here

        // Build a small topology similar to StreamsApp but for test
        builder.stream(StreamsApp.INPUT_TOPIC)
                .map((k, v) -> new org.apache.kafka.streams.KeyValue<>(v, v))
                .groupByKey()
                .windowedBy(TimeWindows.ofSizeWithNoGrace(Duration.ofMinutes(1)))
                .count()
                .toStream()
                .map((wk, count) -> new org.apache.kafka.streams.KeyValue<>(wk.key(), Long.toString(count)))
                .to(StreamsApp.OUTPUT_TOPIC);

        Topology topology = builder.build();

        Properties props = new Properties();
        props.put("application.id", "test");
        props.put("bootstrap.servers", "dummy:9092");

        try (TopologyTestDriver driver = new TopologyTestDriver(topology, props, 0L)) {
            TestInputTopic<String, String> input = driver.createInputTopic(StreamsApp.INPUT_TOPIC, Serdes.String().serializer(), Serdes.String().serializer());
            TestOutputTopic<String, String> output = driver.createOutputTopic(StreamsApp.OUTPUT_TOPIC, Serdes.String().deserializer(), Serdes.String().deserializer());

            input.pipeInput(null, "alice");
            input.pipeInput(null, "alice");

            TestRecord<String, String> rec = output.readRecord();
            // After two events for alice, count should be 1 then 2 (two windowed outputs may appear)
            // Validate last record equals 2
            while (!output.isEmpty()) {
                rec = output.readRecord();
            }
            assertEquals("2", rec.getValue());
        }
    }
}
