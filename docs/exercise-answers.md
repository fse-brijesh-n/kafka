# Exercise Answers and Sample Code

This document contains guided answers and runnable sample code references for the exercises in the handbook.

## Exercise 1 — Topic and Console Flow

Answer: create `practice-topic` and use console producer/consumer as shown in the handbook. No extra code required.

## Exercise 2 — Ordering and Keys

Answer: messages with the same key map to the same partition. Use the console producer with `--property parse.key=true --property key.separator=:` to include keys.

Example:

```text
key1:message-one
key1:message-two
key2:another
```

## Exercise 3 — Consumer Groups

Answer: start two console consumers with the same group id and observe that partitions are distributed between them.

## Exercise 4 — Offset Recovery

Answer: stopping a consumer and producing more messages increases consumer lag; when the consumer restarts it resumes from the last committed offset.

## Exercise 5 — Java JSON Producer (sample)

See `samples/java/JsonProducer.java` and `samples/java/JsonConsumer.java` for runnable examples using the standard Kafka client. Compile with your usual build tool (Maven recommended). Example Maven coordinates:

```xml
<dependency>
  <groupId>org.apache.kafka</groupId>
  <artifactId>kafka-clients</artifactId>
  <version>3.6.0</version>
 </dependency>
```

## Exercise 6 — Design Exercise: Chat with Replay

Answer: A simple design contains:

- WebSocket server (edge) receiving messages from clients
- A Kafka producer inside the WebSocket server publishing to `chat-messages`
- A consumer service that reads `chat-messages`, writes history to DB, and rebroadcasts to WebSocket subscribers

## Exercise 7 — Failure Story

Answer: If a consumer is offline, Kafka retains messages per retention policy. When the consumer restarts it can replay messages from the last committed offset. Monitor lag and add alerts.

---

## Samples (Java)

File: `samples/java/JsonProducer.java`

```java
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
```

File: `samples/java/JsonConsumer.java`

```java
package samples;

import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import java.time.Duration;
import java.util.Collections;
import java.util.Properties;

public class JsonConsumer {
    public static void main(String[] args) {
        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("group.id", "sample-group");
        props.put("auto.offset.reset", "earliest");
        props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
        props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");

        try (KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props)) {
            consumer.subscribe(Collections.singletonList("practice-topic"));
            while (true) {
                ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(1000));
                for (ConsumerRecord<String, String> record : records) {
                    System.out.println("Received: " + record.value());
                }
            }
        }
    }
}
```

## Samples (Node.js using kafkajs)

Folder: `samples/node/`

File: `samples/node/package.json`

```json
{
  "name": "kafka-sample-node",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "kafkajs": "^2.2.4"
  }
}
```

File: `samples/node/index.js`

```js
const { Kafka } = require('kafkajs');

async function run() {
  const kafka = new Kafka({ brokers: ['localhost:9092'] });
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({ topic: 'practice-topic', messages: [{ value: JSON.stringify({ user: 'bob', text: 'hello from node' }) }] });
  console.log('node: sent message');
  await producer.disconnect();
}

run().catch(console.error);
```

## PDF generation

Two small helper scripts are added under `scripts/` to convert the handbook to PDF using `pandoc` (requires Pandoc + LaTeX installed).

Example command (PowerShell):

```powershell
./scripts/generate_pdf.ps1
```

Or on WSL / Linux:

```bash
./scripts/generate_pdf.sh
```
