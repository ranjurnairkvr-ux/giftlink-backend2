const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

async function connectToDatabase() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB");
  return client.db("test");
}

module.exports = connectToDatabase;
