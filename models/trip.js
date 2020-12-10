const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema(
    {
      user: String,
      location: String,
      date: String,
      been: String,
      lat: Number,
      long:  Number,
      notes: String,
      likes: [String],
      images: [String],
      comment:[{
        user: String,
        commentData: String,
      }, 
      {timestamp:true}
    ]
    },
    { timestamps: true }

);

const Trip = mongoose.model("trips", tripSchema);

module.exports = Trip;
