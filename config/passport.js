const JwtStrategy = require('passport-jwt').Strategy;  
const ExtractJwt = require('passport-jwt').ExtractJwt;  
const User = require('../models/user');  
const config = require('./index');

// Setup work and export for the JWT passport strategy
module.exports = function(passport) {  
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;

  // Adding Passport session setup.
  passport.serializeUser(function(user, done) {
    console.log("serializing " + user.username);
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    console.log("deserializing " + obj);
    done(null, obj);
  });

  //Define a passport strategy
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));


  // Simple route middleware to ensure user is authenticated.
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { 
      return next(); 
    }
      
    req.session.error = 'Please sign in!';
    res.redirect('/signin');
  }

};