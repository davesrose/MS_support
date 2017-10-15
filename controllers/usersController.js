const dbUser = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("../config/index");

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    dbUser
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  authenticate: function(req, res) {
    dbUser.findOne({
      email: req.body.email
      }, 
      function(err, user) {
        if (err) throw err;
        
        if (!user) {
          return res.send({ success: false, message: 'Authentication failed. User not found.' });
        } 
        else {
          // Check if password matches
          user.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch && !err) {
              // Create token if the password matched and no error was thrown
              var token = jwt.sign({data: user}, config.secret, {
                expiresIn: 10080 // in seconds
              });
              return res.json({ success: true, token: 'JWT ' + token });
            } 
            else {
              return res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
            }
          });
        }
      });
  },
  register: function(req, res) {
    dbUser
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    dbUser
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};