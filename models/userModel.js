const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    salutation: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    dob: {
        type: String
    },
    age: {
        type: Number
    },
    address: {
        type: String
    },
    qualification: {
        type: String
    },
    profession: {
        type: String
    },
    nominee: {
        type: String
    },
    relationship: {
        type: String
    },
    insuranceData: {
        type: [String]
    },
    insuranceStatus: {
        type: String,
        default: "Pending"
    },
    user_image: {
        type: String
    }

})

module.exports = mongoose.model('user', userSchema)