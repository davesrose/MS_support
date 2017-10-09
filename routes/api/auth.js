const express = require('express');
const passport = require('passport');
const User = require('../../models/user'); 
const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/articles"
router.route("/register")
//   .post((req, res) => {
//   if (!req.body.email || !req.body.password) {
//     res.json({ success: false, message: 'Please enter email and password.' });
//   } 
//   else {
//     var newUser = new User({
//       email: req.body.email,
//       password: req.body.password
//     });

//     // Attempt to save the user
//     newUser.save(function(err) {
//       if (err) {
//         return res.json({ success: false, message: 'That email address already exists.'});
//       }
//       res.json({ success: true, message: 'Successfully created new user.' });
//     });
//   }
// });
  .post(usersController.register);

router.route("/authenticate")
  .post(usersController.authenticate);

router.route("/dashboard")
  .get(passport.authenticate('jwt', { session: false }), function(req, res) {  
  res.send('It worked! User id is: ' + req.user._id + '.');
});

module.exports = router;