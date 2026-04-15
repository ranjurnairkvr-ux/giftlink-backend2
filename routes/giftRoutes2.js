const express = require("express");
const router = express.Router();

const connectToDatabase = require("../models/db");

// Route to filter by category
router.get("/", async (req, res) => {
  const db = await connectToDatabase();

  const category = req.query.category;

  const gifts = await db
    .collection("gifts")
    .find({ category: category })
    .toArray();

  res.json(gifts);
});

module.exports = router;
