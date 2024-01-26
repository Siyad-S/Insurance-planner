const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
    insurance_name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    insurance_details: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('policy', policySchema)