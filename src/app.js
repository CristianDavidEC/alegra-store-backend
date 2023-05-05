const express = require("express");
const morgan = require("morgan");

const productsRoutes = require("./routes/products.routes");
const categoriesRoutes = require("./routes/categories.routes");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", productsRoutes);
app.use("/api", categoriesRoutes);

app.use((req, res, next) => {
  
  res.status(404).json({ message: "Not found" });
});

module.exports = app;


