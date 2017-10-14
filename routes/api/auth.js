const express = require('express');
const passport = require('passport');
const User = require('../../models/user'); 
const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/articles"
router.route("/register")
  .post(usersController.register);

router.route("/authenticate")
  .post(usersController.authenticate);

router.route("/dashboard")
  .get(passport.authenticate('jwt', { session: false }), function(req, res) {  
  	res.send('It worked! User id is: ' + req.user._id + '.');
});

module.exports = router;