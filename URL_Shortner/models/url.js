const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
    url : {
        type: String,
        required : true,
    },
    shortURL : {
        type: String,
    },
    count: {
        type:Number,
        default:0
    }
},{timestamps:true})

const model = mongoose.model('url',urlSchema)
module.exports = model