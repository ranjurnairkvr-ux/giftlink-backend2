const express = require("express");
const app = express();

const giftRoutes = require("./routes/giftRoutes");
const searchRoutes = require("./routes/searchRoutes");

app.use(express.json());


app.use("/api/gifts", giftRoutes);

app.use("/api/search", searchRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
