# Streams Example — Minimal Kafka Streams App

This example demonstrates a minimal Kafka Streams topology that counts events per user in 1-minute tumbling windows.

What it includes
- `pom.xml` — Maven project to build and run the Streams app and tests.
- `src/main/java/.../StreamsApp.java` — the application with a topology.
- `src/test/java/.../StreamsAppTest.java` — unit test using `TopologyTestDriver`.

Run tests (no Kafka required):

```bash
mvn -f a5-advanced-kafka-topics/examples/streams/pom.xml test
```

Run against a local Kafka cluster (requires `bootstrap.servers` on CLI or env):

```bash
mvn -f a5-advanced-kafka-topics/examples/streams/pom.xml package
java -jar target/streams-example-1.0.0.jar --bootstrap.servers=localhost:9092
```

Optional quick Docker Compose for a single-node Kafka (for later): create `docker-compose.yml` with a Kafka image and start it, then run the app.
