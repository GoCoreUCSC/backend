var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var cabSchema = new Schema({
    driverName: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true
    },

    noReview: {
        type: Number,
        require: true
    },
    rate: {
        type: Number,
        require: true
    },
    vehicle: {
        type: String,
        require: true
    },
    passsengers: {
        type: Number,
        require: true
    },
    city:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Cab', cabSchema)