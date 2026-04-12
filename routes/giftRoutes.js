const express = require("express");
const router = express.Router();

const connectToDatabase = require("../models/db"); // DB connection

router.get("/", async (req, res) => {
  const db = await connectToDatabase(); // connecting to DB
  const data = await db.collection("gifts").find().toArray();
  res.json(data);
});

module.exports = router;
