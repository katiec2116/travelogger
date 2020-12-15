const Comment = require("../models/comment");
const Trip = require("../models/trip")


module.exports = {
    addComment: function (req, res) {
        console.log(req.body)
        Comment
            .create({ user: req.body.user, tripId: req.body.tripId, commentData: req.body.commentData })
            .then(({ _id }) => Trip.findOneAndUpdate({ _id: req.body.tripId }, { $push: { comments: _id } }, { new: true }))
            .then(results => console.log("results " + results));
    },
    getComments: function (req, res) {
        Comment
        .find({ tripId: req.params.tripId }).sort({ _id: - 1 })
            .then(results => res.json(results))
            .catch(err => {
                res.json(err);
            });
    }
}