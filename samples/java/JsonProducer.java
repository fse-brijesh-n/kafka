package samples;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;
import java.util.Properties;

public class JsonProducer {
    public static void main(String[] args) {
        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

        try (KafkaProducer<String, String> producer = new KafkaProducer<>(props)) {
            String topic = "practice-topic";
            String json = "{\"user\":\"alice\",\"text\":\"hello\"}";
            producer.send(new ProducerRecord<>(topic, null, json));
            producer.flush();
            System.out.println("Sent JSON message");
        }
    }
}
