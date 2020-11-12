const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  location: { type: String, required: true },
  date: { type: String },
  notes: { type: String }
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;