const Trip = require("../models/trip");
const passport = require('passport');

module.exports = {
    addTrip: function (req, res) {
        console.log(req.body)
        Trip
            .create(req.body)
            .then(results => console.log("results " + results))
    },

    getMyTrips: function (req, res) {
        Trip
            .find({ user: req.params.user })
            .then(results => res.json(results))
    },

    deleteTrip: function (req, res) {
        Trip
            .findOneAndDelete({ _id: req.params.id })
            .then(results => res.send(results))
            .catch(err => {
                console.error(err)
                res.status(422).json(err)
            });
    },

    updateTrip: function (req, res) {
        Trip
            .findOneAndUpdate({ _id: req.params.id },
                { trips: req.body },
                function (err, data) {
                    console.log(data)
                }
            ).then(results => res.send(results))
    },


	getAllTrips: function (req, res) {
        Trip
        .find().limit(10).sort({_id:1})
		.then(results => res.send(results))
},

}