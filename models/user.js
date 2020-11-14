
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema(
    {
        username: { type: String,  unique: true },
        password: String,
        trips: [{ type:Schema.Types.ObjectId, ref: 'Trips' }]
    },
    { timestamps: true },
)

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
