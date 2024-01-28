const express = require("express");
const router = express.Router()
const {
    postInsurance,
    getInsurance,
    getSingleInsurance,
    updateInsurance,
    deleteInsurance } = require('../controllers/userController')

    router.route("/").post(postInsurance).get(getInsurance);
    router.route("/:id").get(getSingleInsurance).put(updateInsurance).delete(deleteInsurance);    

module.exports = router