import express from "express";
import { filterNames } from "./filter";

const app = express();

// GET route at /greet
app.get("/greet", (req, res) => {
  const name = req.query.name as string;

  // Filtered names
  const names = ["Sam", "John", "Max", "Emily"];
  const filteredNames = filterNames(names);

  if (name) {
    res.json({ message: `Hello, ${name}!`, filteredNames });
  } else {
    res.status(400).json({ error: "Name query parameter is required." });
  }
});

export default app;
