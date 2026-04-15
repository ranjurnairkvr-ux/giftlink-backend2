const express = require("express");
const router = express.Router();

const connectToDatabase = require("../models/db");

// Route for /api/gifts
router.get("/", async (req, res) => {
  const db = await connectToDatabase();
  const gifts = await db.collection("gifts").find().toArray();
  res.json(gifts);
});

// Route for /api/gifts/:id
router.get("/:id", async (req, res) => {
  const db = await connectToDatabase();
  const gift = await db
    .collection("gifts")
    .findOne({ _id: req.params.id });

  res.json(gift);
});

module.exports = router;
