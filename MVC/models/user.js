const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    f_name: {
        type: String,
        required: true
    },
    l_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    gender: {
        type: String,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model('users', userSchema);

module.exports = User