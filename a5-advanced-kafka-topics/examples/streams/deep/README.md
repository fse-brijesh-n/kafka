# Streams — Advanced Example: Stream-Table Join & Enrichment

This in-depth example demonstrates a common pattern: enriching an event stream with a reference table using Kafka Streams.

Architecture
- Input topics:
  - `user-events` (events with `userId` and `action`)
  - `user-profiles` (compact topic, latest profile per `userId`)
- Processing:
  - Build a KTable from `user-profiles`.
  - Join `user-events` KStream to the profiles KTable to produce `enriched-events`.
- Output topics:
  - `enriched-events` (JSON with event + profile fields)

What this demonstrates
- Stream-table join semantics and handling null/missing profiles.
- Materialized state stores for profiles.
- How to test locally with `TopologyTestDriver`.

Files included
- `docker-compose.streams.yml` — single-node Kafka + Zookeeper for local testing.
- `StreamsEnrichmentApp.java` — main app with topology.
- `SampleProducer.java` — sends sample profiles and events.
- `exercises/answers.md` — walkthrough and answers.

Run locally (start Kafka first):

```bash
docker compose -f a5-advanced-kafka-topics/examples/streams/deep/docker-compose.streams.yml up -d

mvn -f a5-advanced-kafka-topics/examples/streams/pom.xml package
java -cp a5-advanced-kafka-topics/examples/streams/target/streams-example-1.0.0.jar com.example.kafkastreams.StreamsEnrichmentApp --bootstrap.servers=localhost:9092

# in another shell, run the producer
java -cp a5-advanced-kafka-topics/examples/streams/target/streams-example-1.0.0.jar com.example.kafkastreams.SampleProducer --bootstrap.servers=localhost:9092
```

Notes
- `user-profiles` should be compacted (use `cleanup.policy=compact`) to keep latest profile per key.
- The app is resilient to missing profiles — it will forward events with null profile fields.
