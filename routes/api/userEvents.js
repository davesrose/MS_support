const router = require("express").Router();
const userEventsController = require("../../controllers/userEventsController");

router.route("/")
 .post(userEventsController.createEvent)

router.route("/:id")
	.get(userEventsController.findById)
  .delete(userEventsController.removeEvent)

module.exports = router;