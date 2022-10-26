var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var bookingSchema = new Schema({
    planId: {
        type: String,
        require: true
    },

    tourist: {
        type: String,
        require: true
    },
    
    placedDate: {
         type: Date, 
         default: Date.now,
         require: true
    },

    startDate: {
        type: Date,
        require: true
    },

    endDate: {
        type: Date,
        require: true
    },

    status: {
        type: String,
        default: "Booked",
        require: true
    },


})

module.exports = mongoose.model('booking', bookingSchema)