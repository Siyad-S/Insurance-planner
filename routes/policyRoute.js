const express = require("express");
const router = express.Router()
const {
    postPolicies,
    getPolicies
} = require('../controllers/insurancePolicyController')

    router.route("/").post(postPolicies).get(getPolicies);

module.exports = router