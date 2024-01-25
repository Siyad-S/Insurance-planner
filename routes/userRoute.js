const express = require("express");
const router = express.Router()
const {
    postInsurance,
    getInsurance,
    updateInsurance,
    deleteInsurance } = require('../controllers/userController')

    router.route("/").post(postInsurance).get(getInsurance);
    router.route("/:id").put(updateInsurance).delete(deleteInsurance);    

module.exports = router