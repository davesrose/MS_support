const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.get('/', function(req, res) {  
  res.send('To be filled later.');
});

module.exports = router;
