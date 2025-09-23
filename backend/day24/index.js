// Day 24 – REST API Design Basics
// Date: 2025-09-20

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Example data
let projects = [
  { id: 1, name: "Portfolio Website", tech: "React" },
  { id: 2, name: "Todo API", tech: "Node.js" },
];

// Routes
// GET all projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// GET single project by ID
app.get("/api/projects/:id", (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json(project);
});

// POST new project
app.post("/api/projects", (req, res) => {
  const newProject = { id: Date.now(), ...req.body };
  projects.push(newProject);
  res.status(201).json(newProject);
});

// PUT update project
app.put("/api/projects/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let project = projects.find(p => p.id === id);

  if (!project) return res.status(404).json({ message: "Project not found" });

  project = { ...project, ...req.body };
  projects = projects.map(p => (p.id === id ? project : p));
  res.json(project);
});

// DELETE project
app.delete("/api/projects/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = projects.length;
  projects = projects.filter(p => p.id !== id);

  if (projects.length === initialLength) {
    return res.status(404).json({ message: "Project not found" });
  }

  res.json({ message: "Project deleted successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
