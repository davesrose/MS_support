const router = require("express").Router();
//const usersController = require("../../controllers/usersController");

const User = require('../../models/user');
// // Matches with "/api/users"
// router.route("/")
//   .get(usersController.findAll)
//   .post(usersController.create);

// // Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)

module.exports = router;