const router = require("express").Router();
const authRoutes = require('./auth'); 
const usersRoutes = require('./users'); 
const fileRoutes = require('./file');
//const middlewareRoutes = require('./middleware'); 
const config = require("../../config/index");
var jwt    = require('jsonwebtoken');

// // //auth routes
//  router.use('/auth', authRoutes);

//users routes
router.use('/users', usersRoutes);

//users routes
router.use('/file', fileRoutes);


module.exports = router;
