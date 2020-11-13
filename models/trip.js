const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tripSchema = new Schema(
    {
        user_id: {type: Schema.Types.ObjectId, ref: 'User'},
        trips: {type: Schema.Types.ObjectId, ref: 'User'}
    }
)

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;