require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Connect DB
connectDB();

// Body parser
app.use(express.json());

// Mount routes
app.use("/api/users", userRoutes);
console.log("✅ userRoutes mounted");


// Root test
app.get("/", (req, res) => {
  res.send("Smart Campus Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
