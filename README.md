# Kafka: Learning Guide

This repository contains multiple chat application examples, and this README now serves as a practical end-to-end guide for learning Apache Kafka from installation to advanced usage.

## Table of Contents

1. What Kafka is
2. Why Kafka is used
3. Core Kafka concepts
4. Installation
5. First topic, producer, and consumer
6. Kafka with Java
7. Kafka learning roadmap
8. Advanced Kafka topics
9. Best practices
10. Troubleshooting
11. Suggested next steps in this repository

## What Kafka Is

Apache Kafka is a distributed event streaming platform. It is used to publish, store, process, and consume streams of records in real time.

Kafka is commonly used for:

- Event-driven systems
- Microservices communication
- Log aggregation
- Real-time analytics
- Data pipelines and stream processing

## Why Kafka Is Used

Kafka solves problems that appear in distributed systems when many services need to exchange data reliably.

- It decouples producers and consumers.
- It can handle high throughput.
- It retains messages for a configurable period.
- It supports horizontal scaling.
- It provides durability and fault tolerance.

## Core Kafka Concepts

Before installing Kafka, understand the main building blocks.

### Broker

A Kafka broker is a Kafka server that stores data and serves clients.

### Topic

A topic is a named stream of records. Producers write to topics, and consumers read from them.

### Partition

A topic is split into partitions. Partitions allow Kafka to scale and process messages in parallel.

### Message / Record

A record is a single piece of data stored in Kafka. It usually contains a key, value, timestamp, and optional headers.

### Producer

A producer sends messages to Kafka topics.

### Consumer

A consumer reads messages from Kafka topics.

### Consumer Group

Consumers in the same group share the work of reading partitions from a topic.

### Offset

An offset is the position of a record inside a partition.

### Replication

Partitions can be replicated across brokers for fault tolerance.

## Installation

There are two practical ways to install Kafka for learning:

1. Local binary installation
2. Docker-based installation

If you are on Windows, Docker is usually the easiest option. If you want to understand Kafka deeply, a local binary install is also helpful.

### Prerequisites

- Java 17 or newer
- Git
- At least 4 GB RAM recommended
- A terminal such as PowerShell, Command Prompt, or Windows Terminal

### Setup Links

- [Apache Kafka Downloads](https://kafka.apache.org/downloads)
- [Apache Kafka Documentation](https://kafka.apache.org/documentation/)
- [Kafka Quick Start](https://kafka.apache.org/quickstart)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [OpenJDK Downloads](https://adoptium.net/)
- [Oracle Java Downloads](https://www.oracle.com/java/technologies/downloads/)

## Option 1: Install Kafka Locally

This option is best if you want to run Kafka directly on your machine.

### Step 1: Download Kafka

Download the latest Apache Kafka binary distribution from the official Apache Kafka website.

Choose the version built for Scala you want, then extract it to a folder such as:

```text
C:\kafka
```

### Step 2: Verify Java

Run:

```bash
java -version
```

If Java is not installed, install Java 17 or newer and set `JAVA_HOME`.

### Step 3: Start Kafka in KRaft Mode

Modern Kafka versions can run without ZooKeeper using KRaft mode.

From the Kafka folder, create a cluster ID:

```bash
bin\windows\kafka-storage.bat random-uuid
```

Format the storage directory using the cluster ID:

```bash
bin\windows\kafka-storage.bat format -t <cluster-id> -c config\kraft\server.properties
```

Start Kafka:

```bash
bin\windows\kafka-server-start.bat config\kraft\server.properties
```

Keep this terminal open while Kafka is running.

### Step 4: Create a Topic

Open a new terminal and run:

```bash
bin\windows\kafka-topics.bat --create --topic demo-topic --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1
```

List topics:

```bash
bin\windows\kafka-topics.bat --list --bootstrap-server localhost:9092
```

### Step 5: Start a Consumer

```bash
bin\windows\kafka-console-consumer.bat --topic demo-topic --from-beginning --bootstrap-server localhost:9092
```

### Step 6: Start a Producer

Open another terminal and run:

```bash
bin\windows\kafka-console-producer.bat --topic demo-topic --bootstrap-server localhost:9092
```

Type messages and press Enter. You should see them appear in the consumer window.

## Option 2: Install Kafka with Docker

Docker is ideal for quick learning and repeatable environments.

Example `docker-compose.yml`:

```yaml
services:
  kafka:
    image: bitnami/kafka:latest
    container_name: kafka
    ports:
      - "9092:9092"
    environment:
      - KAFKA_ENABLE_KRAFT=yes
      - KAFKA_CFG_PROCESS_ROLES=broker,controller
      - KAFKA_CFG_NODE_ID=1
      - KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=1@kafka:9093
      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093
      - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092
      - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER
      - KAFKA_CFG_INTER_BROKER_LISTENER_NAME=PLAINTEXT
      - KAFKA_CFG_AUTO_CREATE_TOPICS_ENABLE=true
```

Run it with:

```bash
docker compose up -d
```

Then connect to `localhost:9092`.

## First Topic, Producer, and Consumer

Try the following flow to understand the data path:

1. Create a topic.
2. Start a consumer.
3. Start a producer.
4. Send messages.
5. Observe that messages are persisted and consumed in order within a partition.

This is the smallest practical Kafka loop.

## Kafka with Java

Because this repository already contains Java-based chat applications, Kafka integration is a natural next step.

### Java Producer Example

```java
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

try (KafkaProducer<String, String> producer = new KafkaProducer<>(props)) {
    ProducerRecord<String, String> record = new ProducerRecord<>("demo-topic", "hello kafka");
    producer.send(record);
    producer.flush();
}
```

### Java Consumer Example

```java
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("group.id", "demo-group");
props.put("enable.auto.commit", "true");
props.put("auto.offset.reset", "earliest");
props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");

KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);
consumer.subscribe(Arrays.asList("demo-topic"));

while (true) {
    ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(1000));
    for (ConsumerRecord<String, String> record : records) {
        System.out.println(record.value());
    }
}
```

## How This Repository Fits In

The existing folders in this workspace already give you a good progression:

- `a1-chatapp-tcp-based-JSE/` for raw socket fundamentals
- `a2-chatapp-websocket-based-JEE/` for browser-based real-time messaging
- `a3-chatapp-websocket-based-spring-boot/` for a modern server-side framework
- `a4-chatapp-kafka-server-client-based/` for building the Kafka version of the same chat flow

That makes Kafka easier to learn because you can compare the same business problem across different communication styles.

## Kafka Learning Roadmap

### Beginner Level

Focus on understanding:

- What a broker is
- How topics work
- How producers and consumers interact
- What partitions and offsets mean
- How consumer groups balance load

Practice tasks:

- Create topics
- Send and read messages from the console
- Compare ordered vs parallel consumption

### Intermediate Level

Learn how Kafka behaves in real applications:

- Multiple partitions
- Key-based partitioning
- Consumer rebalancing
- Message retention
- Log compaction
- Offset commit strategies

Practice tasks:

- Build a Java producer and consumer
- Add keys to route messages to partitions
- Simulate consumer failure and recovery

### Advanced Level

Move into production-grade Kafka use:

- Exactly-once semantics
- Idempotent producers
- Transactions
- Replication and leader election
- Security with SSL and SASL
- Monitoring and observability
- Kafka Streams
- Schema management with Avro or Protobuf
- Dead-letter queues
- Capacity planning and tuning

Practice tasks:

- Design an event-driven system
- Create replayable event pipelines
- Use a schema registry
- Add monitoring and alerting

## Advanced Kafka Topics

### Partition Strategy

Partitioning affects both performance and ordering. If messages share the same key, Kafka routes them to the same partition, preserving order for that key.

### Offset Management

Consumers track their progress with offsets. In production, decide whether to commit automatically or manually depending on reliability needs.

### Replication and Durability

Replication protects against broker failure. A higher replication factor improves availability but consumes more storage and network.

### Backpressure and Throughput

Kafka can absorb bursts of traffic, but consumers must still keep up. Monitor lag and scale consumers when lag grows.

### Exactly-Once Processing

Use transactions and idempotent writes when duplicate processing is not acceptable.

### Kafka Streams

Kafka Streams lets you build stream-processing applications directly on top of Kafka topics.

### Security

In production, use:

- TLS encryption
- SASL authentication
- ACLs for authorization

## Best Practices

- Keep message payloads reasonably small.
- Use meaningful topic names.
- Choose partition counts carefully.
- Design keys deliberately.
- Monitor consumer lag.
- Use schemas for long-lived event contracts.
- Prefer stateless consumers when possible.
- Test failure recovery.

## Troubleshooting

### Kafka Does Not Start

- Check whether Java is installed.
- Confirm `JAVA_HOME` is set.
- Verify the port is free.
- Review the Kafka logs.

### Consumer Sees No Messages

- Make sure the producer is sending to the same topic.
- Confirm the consumer is connected to the correct bootstrap server.
- Use `--from-beginning` for console consumers during testing.

### Messages Seem Out of Order

Ordering is guaranteed only within a partition, not across partitions.

### Consumer Lag Is Increasing

- Increase consumer parallelism.
- Reduce message processing time.
- Scale brokers or partitions if needed.

## How To Transition From WebSocket Or Other Approaches To Kafka

If you already built chat apps with TCP, WebSocket, or Spring Boot, Kafka is usually the next step when you need better decoupling, durability, and horizontal scaling.

### When WebSocket Is Enough

Use WebSocket when:

- You need a live, bidirectional browser connection.
- The communication is mainly between a client and one backend service.
- Messages do not need long-term retention or replay.

### When Kafka Becomes A Better Fit

Move to Kafka when:

- Multiple services need the same message.
- You want to buffer traffic spikes.
- You need to replay events later.
- You want producers and consumers to scale independently.
- The system must survive temporary consumer downtime without losing data.

### Migration Path

The easiest transition is to keep WebSocket at the edge and move the internal message flow to Kafka.

1. A browser sends a chat message over WebSocket to your backend.
2. The backend publishes that message to a Kafka topic.
3. One or more Kafka consumers process, store, route, or enrich the event.
4. Another service can push updates back to clients through WebSocket.

This lets WebSocket handle real-time client delivery while Kafka handles reliable service-to-service messaging.

### Mapping Existing Chat Apps To Kafka

Your current examples can be reframed like this:

- TCP chat: direct socket-based message exchange.
- WebSocket chat: real-time browser messaging.
- Spring Boot chat: centralized backend handling and routing.
- Kafka chat: event-driven message propagation with one producer and many consumers.

### Simple Architecture Shift

Instead of:

`Client -> WebSocket Server -> Other Clients`

Use:

`Client -> WebSocket Server -> Kafka Topic -> Consumer Services -> WebSocket Updates`

That shift is useful when chat is only one part of a larger system, such as notifications, audit logs, analytics, or message persistence.

## Suggested Next Steps in This Repository

If you want to continue learning with the existing folders in this repository, a good path is:

1. Review the TCP chat app to understand basic client-server messaging.
2. Compare it with the WebSocket chat implementation.
3. Move the same chat flow to Kafka by treating chat messages as events.
4. Add producer and consumer services for message delivery.
5. Evolve the design into a scalable event-driven architecture.

## Summary

Kafka is a strong fit when you need reliable, scalable, asynchronous communication between systems. Start with topics, producers, consumers, partitions, and offsets. Then move toward consumer groups, replication, stream processing, security, and operational tuning.

If you want, this README can be expanded next into a full project-specific Kafka course with diagrams, exercises, and code samples for each stage.
 
