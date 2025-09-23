// Day 27 – JWT Authentication
// Date: 2025-09-23

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = "supersecretkey";

app.use(express.json());

// In-memory users (demo only)
let users = [];

// Middleware to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied. Token required." });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid or expired token." });
    req.user = user;
    next();
  });
}

// Register route
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Username and password required." });

  const exists = users.find((u) => u.username === username);
  if (exists) return res.status(400).json({ message: "Username already exists." });

  users.push({ username, password });
  res.status(201).json({ message: "User registered successfully." });
});

// Login route with JWT
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) return res.status(401).json({ message: "Invalid credentials." });

  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ message: "Login successful.", token });
});

// Protected route
app.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}. This is your profile.` });
});

// Debug route
app.get("/users", (req, res) => {
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
