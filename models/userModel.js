const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    salutation: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    gender: {
        required: true,
        type: String
    },
    dob: {
        required: true,
        type: Date
    },
    age: {
        required: true,
        type: Number
    },
    address: {
        required: true,
        type: String
    },
    qualification: {
        required: true,
        type: String
    },
    profession: {
        required: true,
        type: String
    },
    nominee: {
        required: true,
        type: String
    },
    relationship: {
        required: true,
        type: String
    },
    insuranceData: {
        required: true,
        type: [String]
    }

})

module.exports = mongoose.model('user', userSchema)