import fs from "fs";
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (!email || !email.includes("@") || !name || name.trim() === "") {
      res.status(422).json({ message: "Inavalid input." });
      return;
    }

    // store it in a datebase
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.1kg7fdz.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ meessage: "Failed to connect to atabase." });
      return;
    }
    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ meessage: "Storing message failed." });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Succesfully stored message!", message: newMessage });
  }
}

export default handler;
