const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema(
    {
        username: { type: String,  unique: true },
        password: String,
        email:{ type: String,  unique: true },
        dob: Date,
        image: String,
        places: [String]
    },
    { timestamps: true },
)

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
