var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var tourPlanSchema = new Schema({
    planId: {
        type: String,
        require: true
    },
    destination: {
        type: String,
        require: true
    },

    rating: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('tourPlan', tourPlanSchema)