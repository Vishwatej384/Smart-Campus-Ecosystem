require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Connect DB
connectDB();

// Middleware (VERY IMPORTANT)
app.use(express.json());

// Register routes (THIS WAS MISSING)
app.use("/api/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Smart Campus Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
