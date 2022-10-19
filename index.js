const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 15000;
const categories = require("./data/categories.json");
const newsData = require("./data/news.json");

// ** cors solving issues -> cors is a middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon News Server");
});

// ** categories api load

app.get("/categories-news", (req, res) => {
  res.send(categories);
});

// ** Individual news load

app.get("/news/:id", (req, res) => {
  const id = req.params.id;

  const individualNews = newsData.find((news) => news._id === id);

  res.send(individualNews);
});

// ** Categorywise news load

app.get("/category/:id", (req, res) => {
  const id = req.params.id;

  if (id === "08") {
    res.send(newsData);
  } else {
    const categoryNews = newsData.filter((news) => news.category_id === id);

    res.send(categoryNews);
  }
});

// ** All news load for the Home component

app.get("/allnews", (req, res) => {
  res.send(newsData);
});

app.listen(port, () =>
  console.log(`Dragon news server running on port: ${port}`)
);
