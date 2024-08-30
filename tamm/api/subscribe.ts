import { VercelRequest, VercelResponse } from "@vercel/node";
import { MongoClient } from "mongodb";

// Cache the MongoDB client
let cachedClient: MongoClient | null = null;

// Function to connect to MongoDB
async function connectToDatabase(uri: string) {
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Validate the email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    try {
      const client = await connectToDatabase(import.meta.env.MONGODB_URI!);
      const db = client.db("emailList");
      const collection = db.collection("subscribedEmails");

      // Insert the email into the database
      await collection.insertOne({
        email: email,
        date: new Date(),
      });

      return res.status(200).json({ message: "Email saved successfully" });
    } catch (error) {
      console.error("Error saving email:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}
