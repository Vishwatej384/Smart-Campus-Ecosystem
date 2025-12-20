require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Connect to database
connectDB();

// Middleware to read JSON body
app.use(express.json());

// 🔥 THIS LINE IS REQUIRED
app.use("/api/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Smart Campus Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
