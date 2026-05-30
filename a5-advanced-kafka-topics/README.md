# A5 — Advanced Kafka Topics: Roadmap & Deep Dive

This module outlines the next learning steps after the basics (A1..A4). It maps a clear, progressive path from intermediate concepts to advanced, production-grade Kafka topics and practices.

## Goal
Give a practical, structured path to master Kafka beyond simple producers/consumers: streaming, connectors, schema management, security, operations, performance, multi-cluster, and real-world architecture patterns.

## Suggested Learning Path
- **Beginner → Intermediate (Review)**: topic design, partitioning, consumer groups, offsets, producers/consumers, retention, compacted topics.
- **Intermediate → Advanced**: stream processing, exactly-once semantics, transactions, idempotent producers, schema evolution, Connect and KSQLDB.
- **Advanced → Expert**: multi-cluster replication (MirrorMaker/Cluster Linking), tiered storage, operator-driven deployment (Strimzi), disaster recovery, capacity planning.

## Topic Map (with concise descriptions)

- Topic Modeling & Design: naming conventions, partitioning keys, hot-keys and mitigation strategies, topic per-aggregate vs topic per-event.
- Partitioning Strategies: key choice, custom partitioners, balancing throughput vs ordering.
- Consumer Group Mechanics: rebalances, cooperative vs eager rebalancing, sticky assignment.
- Delivery Semantics: at-most-once, at-least-once, exactly-once (EOS) — idempotence, transactions, read-process-write patterns.
- Kafka Streams API: transformations, joins, windowing, state stores, punctuators, topology optimization.
- ksqlDB: stream SQL, persistent queries, materialized views, interactive queries.
- Kafka Connect: source/sink connectors, SMTs (Single Message Transforms), connector deployment and scaling, custom connectors.
- Schema Management: Avro/Protobuf/JSON Schema, Confluent Schema Registry, compatibility rules, evolution strategies.
- Security & Authentication: TLS, SASL (PLAIN/ SCRAM/ OAUTHBEARER), ACLs, RBAC, data encryption at rest.
- Observability & Monitoring: JMX, metrics, Prometheus exporters, Grafana dashboards, log aggregation, tracing for streams.
- Performance Tuning: producer batching, linger.ms, compression, acks, throughput vs latency tuning, broker config (replica.fetch, log.segment.bytes), OS tuning.
- Storage & Retention: log compaction, time- vs size-based retention, tiered storage concepts.
- Replication & DR: MirrorMaker 2, Cluster Linking, multi-dc patterns, cross-region replication tradeoffs.
- KRaft & Controllerless Mode: basics of KRaft, migration from Zookeeper, operational changes.
- Exactly-Once & Transactions: best practices, pitfalls in stream joins and sinks, idempotent sinks.
- Testing & QA for Streams: unit testing with TopologyTestDriver, integration tests with Testcontainers, chaos testing patterns.
- Operators & Kubernetes: Strimzi, Banzai Cloud Kafka operator, CRs for configuration, scaling, and upgrades.
- Data Governance: lineage, schema governance, retention policies, GDPR considerations, auditing.
- Advanced Use Cases: event sourcing, CQRS, stateful microservices, stream-native architectures.

## Practical Projects (apply topics)

1. Build a stateful streaming pipeline using Kafka Streams that aggregates event counts per user with windowing and materialized state stores.
2. Deploy Kafka Connect with a JDBC sink and an S3 sink; implement SMT for anonymization.
3. Setup MirrorMaker 2 to replicate a topic between two local clusters; validate data parity and failover.
4. Implement a secure Kafka cluster locally: TLS + SCRAM + ACLs; show producer/consumer authentication.

## Exercises (for each project)
- Design topic layouts and choose partition keys.
- Measure end-to-end latency and tune producer/consumer configs to meet a target SLA.
- Simulate broker failures and observe consumer rebalances and recovery.
- Evolve a schema and demonstrate backward/forward compatibility with Schema Registry.

## Interview Q&A (Short list)

- Q: Explain the difference between log compaction and retention. A: Retention removes old messages by time/size; compaction keeps the latest message per key.
- Q: How does exactly-once work in Kafka? A: Idempotent producer + transactional writes + consumer read-process-write with isolation; configure `enable.idempotence` and transactions.
- Q: What are common causes of frequent rebalances and how to reduce them? A: Short session timeouts, many small partitions per consumer, frequent consumer restarts; use cooperative rebalancing, increase `session.timeout.ms`, lower churn.

## Quick Start Checklist (what to practice next)

- Read Kafka Streams docs and implement a simple topology.
- Run Confluent Schema Registry and practice Avro evolution.
- Configure a Connect cluster with one source and one sink connector.
- Set up Prometheus + Grafana and import a Kafka dashboard.

## Resources & Further Reading
- Kafka official docs: https://kafka.apache.org/
- Kafka Streams: https://kafka.apache.org/documentation/streams/
- Kafka Connect: https://kafka.apache.org/documentation/connect/
- Confluent blog and docs for Schema Registry, ksqlDB, and best practices.
- Strimzi operator docs and examples.

## Files to add later (notes)
- `a5/examples/streams/` — sample Kafka Streams apps (Java/Scala)
- `a5/examples/connect/` — connector configs and SMT samples
- `a5/exercises/answers.md` — detailed exercise walkthroughs

---
Created to extend the project with an advanced roadmap; tell me which project you want first (Streams, Connect, Security, Observability, or Replication) and I'll scaffold examples and exercises.
