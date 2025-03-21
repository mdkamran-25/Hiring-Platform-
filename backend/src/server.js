const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());

// Root route to prevent "Cannot GET /"
app.get("/", (req, res) => {
  res.send("Welcome to the Express Backend!");
});

// Sample API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express Backend!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
