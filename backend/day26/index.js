// Day 26 – User Login API
// Date: 2025-09-22

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory user storage (for demo only)
let users = [];

// Register route
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  const exists = users.find((u) => u.username === username);
  if (exists) {
    return res.status(400).json({ message: "Username already exists." });
  }

  users.push({ username, password });
  res.status(201).json({ message: "User registered successfully." });
});

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  res.json({ message: `Welcome back, ${username}!` });
});

// List users (debug/demo)
app.get("/users", (req, res) => {
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
