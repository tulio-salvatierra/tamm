import { MongoClient } from "mongodb";

let cachedClient = null;

async function connectToDatabase(uri) {
  if (cachedClient) {
    return cachedClient;
  }
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  const { email } = req.body;
  console.log({ email });

  if (!email || !/.+@.+\..+/.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  try {
    const client = await connectToDatabase(process.env.MONGODB_URI); // Accessing the environment variable directly
    const db = client.db("emailList");
    const collection = db.collection("subscribedEmails");

    await collection.insertOne({
      email,
      date: new Date(),
    });

    return res.status(200).json({ message: "Email saved successfully" });
  } catch (error) {
    console.error("Error in serverless function:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
