const User = require("../models/user");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    User
      .find(req.query)
      .sort({ date: -1 })
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    User
      .findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    User
      .create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  }
};
