const router = require("express").Router();
const authRoutes = require('./auth'); 
const usersRoutes = require('./users'); 
const fileRoutes = require('./file');
//const middlewareRoutes = require('./middleware'); 
const config = require("../../config/index");
var jwt    = require('jsonwebtoken');

// //auth routes
router.use('/auth', authRoutes);

// router.use(function(req, res, next) {
//     // check header or url parameters or post parameters for token
//     console.log("Entering verify");
//     var token = req.body.token || req.query.token || req.headers['x-access-token'];

//     console.log(token);
//     // decode token
//     if (token) {
//       //Passing in / Reformating the token before decoding
//       jwt.verify(token.replace("JWT ",""), config.secret, function(err, decoded) {
//        if(err){
//            console.log('There is an error ' + err)
//        }else{
//         req.decoded = decoded.data;    
//         next();  
//        }
//       })
//     } else {
//       // if there is no token
//       return res.status(403).send({success: false, email: null, message: 'No token provided.'});
//     }
//   });

//users routes
router.use('/users', usersRoutes);

//users routes
router.use('/file', fileRoutes);


module.exports = router;
