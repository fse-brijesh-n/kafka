package com.example.kafkastreams;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;

import java.util.Properties;

public class SampleProducer {
    public static void main(String[] args) throws Exception {
        String bootstrap = System.getProperty("bootstrap.servers", System.getenv().getOrDefault("BOOTSTRAP_SERVERS", "localhost:9092"));
        Properties props = new Properties();
        props.put("bootstrap.servers", bootstrap);
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

        try (KafkaProducer<String, String> producer = new KafkaProducer<>(props)) {
            ObjectMapper mapper = new ObjectMapper();

            // send a few profiles
            ObjectNode profile = mapper.createObjectNode();
            profile.put("userId", "alice");
            profile.put("email", "alice@example.com");
            producer.send(new ProducerRecord<>("user-profiles", "alice", mapper.writeValueAsString(profile)));

            profile = mapper.createObjectNode();
            profile.put("userId", "bob");
            profile.put("email", "bob@example.com");
            producer.send(new ProducerRecord<>("user-profiles", "bob", mapper.writeValueAsString(profile)));

            // send events
            ObjectNode event = mapper.createObjectNode();
            event.put("userId", "alice");
            event.put("action", "login");
            producer.send(new ProducerRecord<>("user-events", "alice", mapper.writeValueAsString(event)));

            event = mapper.createObjectNode();
            event.put("userId", "charlie");
            event.put("action", "purchase");
            producer.send(new ProducerRecord<>("user-events", "charlie", mapper.writeValueAsString(event)));

            producer.flush();
        }
    }
}
