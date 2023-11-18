const express = require("express");
const cors = require("cors");
const db = require("./data");

const app = express();
const port = process.env.HOST || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json(db);
});

app.listen(port, () => {
  if (process.env.HOST) {
    console.log(`Example app listening on ${process.env.HOST}`);
  } else {
    console.log(`Example app listening on http://localhost:${port}`);
  }
});
