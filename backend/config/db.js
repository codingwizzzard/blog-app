const mongoose = require("mongoose");

require("dotenv").config();

let url = process.env.MONGO_URL;

const db = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;