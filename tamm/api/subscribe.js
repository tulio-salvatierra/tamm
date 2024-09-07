// api/storeEmail.js
const { MongoClient } = require("mongodb");

// MongoDB connection string and database from environment variables
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(dbName);
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const { db } = await connectToDatabase();
      const collection = db.collection("emails");
      await collection.insertOne({ email, createdAt: new Date() });

      return res.status(201).json({ message: "Email stored successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Database connection error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
