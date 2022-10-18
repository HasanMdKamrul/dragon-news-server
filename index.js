const express = require("express");
const app = express();
const port = process.env.PORT || 15000;
const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("Dragon News Server");
});

// ** categories api

app.get("/categories-news", (req, res) => {
  res.send(categories);
});

app.listen(port, () =>
  console.log(`Dragon news server running on port: ${port}`)
);
