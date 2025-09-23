// Day 25 – Basic User Registration Endpoint
// Date: 2025-09-25

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Mock user storage (temporary, will use DB later)
let users = [];

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Day 25 of 100 Days of Code – User Registration API");
});

// Register endpoint
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  // Check if user already exists
  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(409).json({ error: "User already exists" });
  }

  // Store user
  users.push({ username, password });
  res.status(201).json({ message: "User registered successfully ✅" });
});

// List all users (for testing)
app.get("/users", (req, res) => {
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
