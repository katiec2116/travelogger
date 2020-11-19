const User = require("../models/user");
const passport = require('passport');

module.exports = {
	getUser: function (req, res) {
		const { user } = req.session.passport

		if (user) {
			User.findOne({ username: user })
				.then(userData => {
					console.log(userData);
					const { _id, username } = userData;
					return res.status(200).json({
						id: _id,
						username,
						authenticated: true
					})
				})
		} else {
			return res.status(401).json({
				error: 'User is not authenticated',
				authenticated: false
			});
		}
	},
	register: function (req, res, next) {
		console.log('/register handler', req.body);
		User.register(new User({ username: req.body.username }), req.body.password, (err, User) => {
			if (err) {
				return res.status(500).send({ error: err.message });
			}

			passport.authenticate('local')(req, res, () => {
				req.session.save((err) => {
					if (err) {
						//ToDo:log the error and look for an existing user

						return next(err);
					}

					res.send(200, "successful register");
				});
			});
		});
	},
	login: function (req, res, next) {
		console.log('/login handler');
		if (!req.session.passport.user) {
			return false;
		}
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			console.log(`User at login ${req.user.username}`);

			res.status(200).json({ test: " testvalue" });
		});
	},
	logout: function (req, res, next) {
		req.logout();
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			res.status(200).send('OK');
		});
	},

	addTrip: function (req, res) {
		console.log("req.id "+ req.body)
		User
		.findByIdAndUpdate({_id:req.params.id} ,{  $push: { trips: req.body }})
		.then(results => console.log("results "+results))
	},

	getMyTrips: function (req, res) {
			User.findById({ _id: req.params.id })
			.then(results => res.json(results))
	},

	deleteTrip: function (req, res) {
		User.updateOne({ _id:req.params.id},
			{ "$pull" : {
				"trips" : {
					"_id" : req.params.tripid 
				}}}, {safe:true},
				function(err, data){
					console.log(data)
				}
		)
		.then(results => res.send(results))
		.catch(err => {
			console.error(err)
			res.status(422).json(err)
		});
	},

	getAllTrips: function (req, res) {
		User.find().limit(10).sort({_id:1})
		.then(results => res.send(results))
},

	getUsers: function (req, res) {
	User.find()
	.then(results => res.send(results))
},
};