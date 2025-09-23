// Day 23 – CRUD with In-Memory Data
// Date: 2025-09-19

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data (lost after server restart)
let users = [];

// Create (POST)
app.post("/users", (req, res) => {
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json(user);
});

// Read (GET)
app.get("/users", (req, res) => {
  res.json(users);
});

// Update (PUT)
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let user = users.find(u => u.id === id);

  if (!user) return res.status(404).json({ message: "User not found" });

  user = { ...user, ...req.body };
  users = users.map(u => (u.id === id ? user : u));
  res.json(user);
});

// Delete (DELETE)
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = users.length;
  users = users.filter(u => u.id !== id);

  if (users.length === initialLength) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ message: "User deleted successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
