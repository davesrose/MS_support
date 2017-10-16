const dbUser = require("../models/user");
const jwt = require('jsonwebtoken');
const config = require("../config/index");

// Defining methods for the usersController
module.exports = {
  authenticate: function(req, res) {
    dbUser.findOne({
      email: req.body.email
      }, 
      function(err, user) {
        if (err) return res.status(500).send('Error on the server.');
        
        if (!user) {
          return res.status(404).send({ success: false, message: 'Authentication failed. User not found.' });
        } 
        else {
          // Check if password matches
          user.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch && !err) {
              // Create token if the password matched and no error was thrown
              var token = jwt.sign({data: user}, config.secret, {
                expiresIn: 10080 // in seconds
              });
              // window.localStorage.setItem('token', token);
              return res.status(200).json({ success: true, token: 'JWT ' + token, message: 'Authentication sucessful'});
            } 
            else {
              return res.status(401).send({ success: false, token: null, message: 'Authentication failed. Passwords did not match.' });
            }
          });
        }
      });
  },
  register: function(req, res) {
    dbUser
      .create(req.body, function(err) {
        if (err) {
          return res.status(401).json({ success: false, message: 'That email address already exists.'});
        }
          return res.status(200).json({ success: true, message: 'Successfully created new user.'});
      }); 
  },
  verifyToken: function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, config.secret, function(err, decoded) {      
        if (err) {
          return res.status(500).res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          // if everything is good, save to request for use in other routes
          res.status(200).req.decoded = decoded;    
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
    }
  },
  logout: function(req, res){
    return res.status(200).send({ auth: false, token: null });
  }
};