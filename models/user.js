const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        userName: { type: String, required: true },
        passWord: { type: [String], required: true },
        trips: [{ type:Schema.Types.ObjectId, ref: 'Trips' }]
    },
    { timestamps: true },
)

const tripSchema = new Schema(
    {
        user_id: {type: Schema.Types.ObjectId, ref: 'User'},
        trips: {type: Schema.Types.ObjectId, ref: 'User'}
    }
)

const Trip = mongoose.model('trips', tripSchema);
const User = mongoose.model('users', userSchema);

module.exports = Trip;
module.exports = User;