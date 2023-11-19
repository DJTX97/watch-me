require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./data");

const app = express();
const devPort = 5000;
const prodPort = process.env.HOST;

corsOptions = process.env.NODE_ENV === "development"
  ? {
    origin: "http://localhost:5000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  : {
    origin: process.env.CLIENT,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

app.use(cors(corsOptions));
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

