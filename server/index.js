require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./dbConnect");
const Movie = require("./models/Movie");
const Genre = require("./models/Genre");
//const db = require("./data"); //static data for testing purposes

const app = express();
const devPort = 5000;
const prodPort = process.env.HOST;

corsOptions =
  process.env.NODE_ENV === "development"
    ? {
        origin: "http://localhost:5173",
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      }
    : {
        origin: process.env.CLIENT,
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      };

app.use(cors(corsOptions));
app.use(express.json());

connectToDB();

//get all movies
app.get("/", async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.header("Access-Control-Allow-Origin", corsOptions.origin);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//get all genres
app.get("/genres", async (req, res) => {
  try {
    const genres = await Genre.find({});
    res.header("Access-Control-Allow-Origin", corsOptions.origin);
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//receive form submissions
app.post("/form_submissions", async (req, res) => {
  try {
    res.status(201).json({
      status: { code: 201, message: "Form submitted successfully" }
    });
    console.log(req.body);
  } catch (error) {
    res.status(500).json({
      status: { code: 500, message: "Internal server error" },
    });
  }
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
