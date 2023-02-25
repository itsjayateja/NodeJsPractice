const MongoClient = require('mongodb').MongoClient;
const express = require('express')

const app = express()

// Connection URL
const url = 'mongodb://localhost:27017/JayaTeja';

// Database Name
const dbName = 'JayaTeja';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Connect to the MongoDB server
client.connect(function(err) {
  if (err) {
    console.error('Failed to connect to the MongoDB server:', err);
    return;
  }
.code
  console.log('Connected successfully to the MongoDB server');

  const db = client.db(dbName);

  // Create the jayfriends collection
  db.createCollection('jayfriends', function(err, result) {
    if (err) {
      console.error('Failed to create collection:', err);
      client.close();
      return;
    }

    console.log('Collection created successfully:', result.collectionName);
    client.close();
  });

app.listen(3000, ()=> {console.log("Server started")})
});
