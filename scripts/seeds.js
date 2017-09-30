const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// Generalizing it to have an idea on how and where to start
// Will be working on it with rest of backend team


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ms_support",
  {
    useMongoClient: true
  }
);

const msSeed = [

//populate database here

];