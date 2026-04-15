const express = require("express");
const router = express.Router();

const connectToDatabase = require("../models/db"); // 👈 THIS is the important line

router.get("/", async (req, res) => {
  const db = await connectToDatabase();
  const data = await db.collection("gifts").find().toArray();
  res.json(data);
});

module.exports = router;
