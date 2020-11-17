const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema(
    {
        username: { type: String,  unique: true },
        password: String,

        trips: [
            {
              type: {
                type: String,
              },
              location: {
                type: String,
              },
              date: {
                type: String,
              },
              been: {
                type: String
              },
              lat: {
                type: Number
              },
              long: {
                type: Number
              },
              notes: {
                type: String
              },
              images: [
                  {
                type: String,
              }
            ]
            }
          ]
    },
    { timestamps: true },
)

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
