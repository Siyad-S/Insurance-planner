const express = require("express");
const router = express.Router()
const {
    postPolicies,
    getPolicies,
    getPolicy
} = require('../controllers/insurancePolicyController')

    router.route("/").post(postPolicies).get(getPolicies);
    router.route("/:id").get(getPolicy)

module.exports = router