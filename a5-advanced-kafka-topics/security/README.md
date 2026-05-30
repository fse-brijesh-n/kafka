# A5/Security — Kafka Security Starter

Notes and starter steps to secure a Kafka cluster.

Suggested mini-projects:
- Setup TLS for brokers and clients.
- Configure SASL/SCRAM authentication and ACLs for topics.

Starter files (to add):
- `security/keystores/` — certs and keystores.
- `security/acl-scripts/` — scripts to create ACLs with `kafka-acls.sh`.

Next steps for you:
- Generate certificates and test authenticated producers/consumers.
- Document the minimal ACLs required for your app.
