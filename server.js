const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require('passport');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Log requests to console
app.use(morgan('dev'));  

// pass the passport middleware
app.use(passport.initialize());

// Bring in defined Passport Strategy
require('./config/passport')(passport);  

// Serve up static assets
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

//mongoose connections

if(process.env.NODE_ENV == 'production'){
  // Gotten using `heroku config | grep MONGODB_URI` command in Command Line
  mongoose.connect('mongodb://heroku_jhgctt3s:q9jpi6mcqk7urm6p22q44idmk1@ds121225.mlab.com:21225/heroku_jhgctt3s');
}
else{
  mongoose.connect('mongodb://localhost/ms_support');
}

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});