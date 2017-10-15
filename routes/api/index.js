const router = require("express").Router();
const authRoutes = require('./auth'); 
const usersRoutes = require('./users'); 
const fileRoutes = require('./file');
//const middlewareRoutes = require('./middleware'); 
const config = require("../../config/index");
var jwt    = require('jsonwebtoken');

//auth routes
router.use('/auth', authRoutes);

//middleware routing
// router.use('/middleware', middlewareRoutes);
// route middleware to verify a token
// router.use(function(req, res, next) {

//   // check header or url parameters or post parameters for token
//   var token = req.body.token || req.query.token || req.headers['x-access-token'];

//   // decode token
//   if (token) {

//     // verifies secret and checks exp
//     jwt.verify(token, config.secret, function(err, decoded) {      
//       if (err) {
//         return res.json({ success: false, message: 'Failed to authenticate token.' });    
//       } else {
//         // if everything is good, save to request for use in other routes
//         req.decoded = decoded;    
//         next();
//       }
//     });

//   } else {

//     // if there is no token
//     // return an error
//     return res.status(403).send({ 
//         success: false, 
//         message: 'No token provided.' 
//     });

//   }
// });

//users routes
router.use('/users', usersRoutes);

//users routes
router.use('/file', fileRoutes);


module.exports = router;
