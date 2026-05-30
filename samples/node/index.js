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
