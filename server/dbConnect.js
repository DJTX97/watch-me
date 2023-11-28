const mongoose = require("mongoose");

const DATABASE = process.env.NODE_ENV === "development" ? process.env.DATABASE_URI : process.env.MONGODB_URI;

const connect = async () => {

  mongoose
    .connect(DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = connect;
