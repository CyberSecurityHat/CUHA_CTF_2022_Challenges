const express = require("express");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "i want to disable crawling" });
});

app.get('/robots.txt', (req, res) => {
  res.render("robots");
})

app.get('/admin/', (req, res) => {
  res.render("admin");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

