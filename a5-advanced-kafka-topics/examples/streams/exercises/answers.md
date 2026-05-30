# Streams Advanced — Exercises & Detailed Answers

This walkthrough guides you through running the enrichment example end-to-end, testing it, and answering common design questions.

Prerequisites
- Docker & Docker Compose (for local Kafka)
- Java 17 and Maven (to build and run the app)

1) Start local Kafka

```bash
cd a5-advanced-kafka-topics/examples/streams/deep
docker compose -f docker-compose.streams.yml up -d
```

Wait for the `kafka` service to be healthy (check `docker compose ps`).

2) Create topics

Compact the profiles topic so latest profile per key is kept. Use the `kafka-topics.sh` tool via the Kafka container to create the topics (example uses `--bootstrap-server localhost:9092`).

3) Build the example

```bash
mvn -f a5-advanced-kafka-topics/examples/streams/pom.xml package
```

4) Start the Streams app

```bash
java -cp a5-advanced-kafka-topics/examples/streams/target/streams-example-1.0.0.jar com.example.kafkastreams.StreamsEnrichmentApp --bootstrap.servers=localhost:9092
```

5) Seed profiles and events

Use the provided `SampleProducer` to seed both `user-profiles` and `user-events` with example data:

```bash
java -cp a5-advanced-kafka-topics/examples/streams/target/streams-example-1.0.0.jar com.example.kafkastreams.SampleProducer --bootstrap.servers=localhost:9092
```

Alternatively, use `kafka-console-producer.sh` to produce keyed messages (set `--property parse.key=true` and `--property key.separator=:`). Ensure keys match (userId) so joins work.

6) Observe enriched output

```bash
docker compose -f docker-compose.streams.yml exec kafka \
  kafka-console-consumer.sh --topic enriched-events --from-beginning --bootstrap-server localhost:9092
```

Expected behavior:
- Events for users with profiles should include profile fields.
- Events for users without profiles should still be forwarded; `profile` field may be `null`.

7) Unit testing (TopologyTestDriver)

Run unit tests which use `TopologyTestDriver` (no Kafka required):

```bash
mvn -f a5-advanced-kafka-topics/examples/streams/pom.xml test
```

These tests verify the join logic, null-profile handling, and that enriched JSON contains expected fields.

Design Questions & Answers

- Q: Why use a compacted `user-profiles` topic?
  - A: Profiles are a changelog keyed by `userId`; compaction ensures the topic retains only the latest value per key, saving storage and making lookups efficient.

- Q: Why key events by `userId`?
  - A: Stream-table joins match stream keys to table keys; consistent keys ensure correct enrichment and locality of state.

- Q: How to handle late profile updates?
  - A: Profiles written after an event will not affect already-processed events; use event-time processing with appropriate windowing or emit compensating events when profiles change.

- Q: How to ensure exactly-once semantics for writes to external sinks?
  - A: Use Kafka transactions in producers or idempotent sink implementations; when writing to an external DB, consider transactional outbox or idempotent write patterns.

- Q: How to scale this topology?
  - A: Increase partitions on topics (events and enriched output) and run multiple stream instances with the same `application.id`. Ensure `user-profiles` table is partitioned by key and uses the same keying strategy.

Troubleshooting

- If `enriched-events` contains zeros or missing profiles, verify that event keys match profile keys and that `user-profiles` is compacted and populated before producing events.
- If you see duplicate enriched messages, check producer retries/acks and ensure the application isn't restarted with the same offsets; unit tests help isolate logic issues.

Further exercises (optional)

- Implement a fallback enrichment using a REST call when profile is missing and cache results in a local state store.
- Add windowed aggregations on `enriched-events` (e.g., counts per action per minute) and materialize to a store.
