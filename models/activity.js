var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var activitySchema = new Schema({
    activity: {
        type: String,
        require: true
    },
    place: {
        type: String,
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

module.exports = mongoose.model('Activity', activitySchema)