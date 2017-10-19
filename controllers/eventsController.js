const dbEvent = require("../models/event");

// Defining methods for the usersController
module.exports = {
  findById: function(req, res) {
    dbEvent
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    dbEvent
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    dbEvent
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    dbEvent
      .create(req.body, function(err) {
         if (err) {
          return res.status(422).json({ success: false, message: 'Error while creating event'});
         }
          return res.status(200).json({ success: true, message: 'Successfully created new user.'});
    }); 
  }
};