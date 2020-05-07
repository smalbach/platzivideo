const express = require("express");
const app = express();

const { config } = require("./config/index");

app.get("/", function (req, res) {
  res.send("Hello world...");
});

app.get("/json", function (req, res) {
  res.json({ hello: "world" });
});

app.get("/user/:id", function (req, res) {
  res.send("user " + req.params.id);
});

app.get("/notfound", function (req, res) {
  res.status(404).end();
});

app.get("/error500", function (req, res) {
  res.status(500).json({ error: "message" });
});

app.get("/esbiciesto/:year", function (req, res) {
  let year = req.params.year;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    res.send(`El año ${year} es biciesto`);
  } else {
    res.send(`El año ${year} NO es biciesto`);
  }
});

app.listen(config.port, function () {
  console.log(`Listen on http://localhost:${config.port}`);
});
