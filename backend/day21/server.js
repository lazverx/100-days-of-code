// Day 21 – Backend Setup with Express
// Date: 2025-09-17

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Hello, Backend World! 🚀 Day 21 of 100 Days of Code");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
