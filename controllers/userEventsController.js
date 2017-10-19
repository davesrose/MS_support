const dbUserEvent = require("../models/userevent");

// Defining methods for the usersController
module.exports = {
  createEvent: function(req, res) {
    dbUserEvent
      .create(req.body, function(err) {
         if (err) {
          return res.status(422).json({ success: false, message: 'Error while creating event'});
         }
          return res.status(200).json({ success: true, message: 'Successfully created new user.'});
    }); 
  },
  removeEvent: function(req, res) {
    dbUserEvent
      .findById({_id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log(req.params.id);
    dbUserEvent
      .find({ userId: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};