require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./data");

const app = express();
const devPort = 5000;
const prodPort = process.env.HOST;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json(db);
});

if (process.env.NODE_ENV === "development") {
  app.listen(devPort, () => {
    console.log(`Example app listening on http://localhost:${devPort}`);
  });
} else {
  app.listen(prodPort, () => {
    console.log(`Example app listening on ${process.env.HOST}`);
  });
}

