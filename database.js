const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('lovebox');
const messageCollection = db.collection('messages');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addMessage(message) {
  const result = await messageCollection.insertOne(message);
  return result;
}

async function getMessages() {
  const cursor = await messageCollection.find();
  return cursor.toArray();
}

module.exports = { addMessage, getMessages };