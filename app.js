const express = require("express");
const app = express();

const searchRoutes = require("./routes/searchRoutes");

// This line serves /api/search
app.use("/api/search", searchRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
