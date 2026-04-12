const express = require("express");
const router = express.Router();

const connectToDatabase = require("../models/db");

// Route: GET /api/search?category=electronics
router.get("/", async (req, res) => {
  const db = await connectToDatabase();

  const category = req.query.category;

  let query = {};

  if (category) {
    query.category = category; // filter by category
  }

  const results = await db.collection("gifts").find(query).toArray();

  res.json(results);
});

module.exports = router;
