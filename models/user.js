
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
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

const Trip = mongoose.model('Trip', tripSchema);
const User = mongoose.model('User', userSchema);

module.exports = Trip;
module.exports = User;