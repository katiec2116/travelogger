const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        user: String,
        commentData: String,
        tripId: String
      }, 
      {timestamps:true}

);

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;