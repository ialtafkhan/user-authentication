const mongoose = require("mongoose")


const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'upload/default.png'
    },
    mobile: {
        type: String,
        default: 7020989622
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)