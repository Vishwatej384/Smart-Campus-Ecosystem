require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Smart Campus Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
