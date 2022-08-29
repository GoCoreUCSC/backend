var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var hotelSchema = new Schema({
    hotelName: {
        type: String,
        require: true
    },
    noOfRooms: {
        type: Number,
        require: true
    },

    location: {
        type: String,
        require: true
    },
    manager: {
        type: String,
        require: true
    },
    phnNo: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    img:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Hotel', hotelSchema)