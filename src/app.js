const express = require("express");
const morgan = require("morgan");

const articlesRoutes = require("./routes/articles");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", articlesRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

module.exports = app;


