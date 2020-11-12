const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: [String], required: true },

  trips: [
    {
      location: { type: String, required: true },
      review: { type: String, required: true },
    },
  ],
});

const User = mongoose.model("users", userSchema);

module.exports = User;
