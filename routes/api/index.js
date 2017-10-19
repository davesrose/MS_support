const router = require("express").Router();
const authRoutes = require('./auth'); 
const usersRoutes = require('./users'); 
const fileRoutes = require('./file');
const eventsRoutes = require('./events');
const userEventsRoutes = require('./userEvents');
//const middlewareRoutes = require('./middleware'); 
const config = require("../../config/index");
var jwt    = require('jsonwebtoken');

// //auth routes
router.use('/auth', authRoutes);

//users routes
router.use('/users', usersRoutes);

//users routes
router.use('/file', fileRoutes);

//users routes
router.use('/events', eventsRoutes);

//users routes
router.use('/userEvents', userEventsRoutes);


module.exports = router;
