const express = require("express");
const router = express.Router()
const {
    postPolicies
} = require('../controllers/insurancePolicyController')

    router.route("/").post(postPolicies);

module.exports = router