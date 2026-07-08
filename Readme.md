```
LEVEL 0: FOUNDATIONS
├── 0.1 Problem Kafka Solves (Decoupling, Async)
├── 0.2 What is Kafka (Event Streaming Platform)
├── 0.3 Kafka vs Alternatives (RabbitMQ, SQS, Redis)
└── 0.4 Core Use Cases (Messaging, Streams, CDC, Event Sourcing)

LEVEL 1: CORE CONCEPTS
├── 1.1 Messages (Key, Value, Headers, Timestamp, Offset)
├── 1.2 Topics (Naming, Configuration, Management)
├── 1.3 Partitions (Parallelism, Ordering, Leadership)
├── 1.4 Offsets (Commit Strategies, Seeking, Lag)
└── 1.5 Producers (Batching, Compression, Retries, Idempotence)

LEVEL 2: CONSUMERS
├── 2.1 Consumers (Pull-based, Poll Loop, Patterns)
├── 2.2 Consumer Groups (Rebalancing, Assignment Strategies)
└── 2.3 Offset Management (Auto, Manual, Idempotent)

LEVEL 3: DELIVERY GUARANTEES
├── 3.1 At-Most-Once (Data loss possible)
├── 3.2 At-Least-Once (Duplicates possible)
└── 3.3 Exactly-Once (Transactions + Idempotence)

LEVEL 4: KAFKA STREAMS
├── 4.1 Stream DSL (Filter, Map, Join, Aggregate)
├── 4.2 Stateful Operations (Window, Count, Reduce)
└── 4.3 Interactive Queries

LEVEL 5: KAFKA CONNECT
├── 5.1 Source Connectors (External → Kafka)
├── 5.2 Sink Connectors (Kafka → External)
├── 5.3 Transformations (SMTs)
└── 5.4 Custom Connectors

LEVEL 6: SCHEMA REGISTRY
├── 6.1 Avro Schemas
├── 6.2 Schema Evolution (Backward, Forward, Full)
└── 6.3 Compatibility Types

LEVEL 7: SECURITY
├── 7.1 Authentication (SSL, SASL, OAuth)
├── 7.2 Authorization (ACLs)
├── 7.3 Encryption (TLS/SSL)
└── 7.4 Security Best Practices

LEVEL 8: OPERATIONS
├── 8.1 Cluster Management
├── 8.2 Monitoring (JMX, Prometheus, Lag)
├── 8.3 Alerting
├── 8.4 Disaster Recovery
└── 8.5 Performance Tuning

LEVEL 9: ADVANCED
├── 9.1 Multi-Datacenter (MirrorMaker 2)
├── 9.2 Tiered Storage
├── 9.3 KRaft (ZooKeeper-less)
└── 9.4 Kubernetes Operators

LEVEL 10: REAL-WORLD ARCHITECTURES
├── 10.1 Event-Driven Microservices
├── 10.2 CQRS Pattern
├── 10.3 Saga Pattern
├── 10.4 Event Sourcing
└── 10.5 Anti-Patterns
```
