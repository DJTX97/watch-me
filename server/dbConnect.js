const mongoose = require("mongoose");

const connect = async () => {
  mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = connect;
