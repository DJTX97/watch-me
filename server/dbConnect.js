const mongoose = require("mongoose");

const DATABASE = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); // second argument is necessary for deployment services with Node.js Driver version lower than 4.0.0 and for security reasons

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connect;
