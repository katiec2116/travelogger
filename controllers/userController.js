const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .find({username : req.params.username})
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.User
      .create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  }
};
