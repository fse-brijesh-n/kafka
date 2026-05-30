# A5/Connect — Kafka Connect Starter

Notes and starter configs for Kafka Connect (source/sink connectors).

Suggested mini-projects:
- JDBC source -> Kafka topic; Kafka topic -> JDBC sink.
- S3 sink with Single Message Transform (SMT) to redact PII.

Starter files (to add):
- `connectors/jdbc-source.json` and `connectors/s3-sink.json`.
- `docker-compose.connect.yml` — Kafka + Connect + Schema Registry.

Next steps for you:
- Add connector configs and run with Connect REST API.
- Experiment with SMTs and schema evolution.
