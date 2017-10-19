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
app.use(express.static("client/build/"));
//app.use(express['static'](__dirname+'client/public', {maxAge: 86400000}));
// Add routes, both API and view
app.use(routes);


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB

if(process.env.NODE_ENV == 'production'){
  // Gotten using `heroku config | grep MONGODB_URI` command in Command Line
  mongoose.connect('mongodb://heroku_05rx77hg:120hd257fvqmrnaujg5d8gpcgk@ds125255.mlab.com:25255/heroku_05rx77hg');
}
else{
  mongoose.connect('mongodb://localhost/ms_support');
}


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

//var express = require('express');
var socket = require('socket.io');
//var path = require('path');


// App setup
var PORT2 = process.env.PORT || 4000;

//var app = express();
var server = app.listen(PORT2, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
//app.use(express.static('client/public'));


// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});