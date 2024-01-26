const user = require("../models/userModel");
const asyncHandler = require('express-async-handler')

const postInsurance = asyncHandler(async (req, res) => {
  try {
    const {
      salutation,
      name,
      email,
      gender,
      dob,
      age,
      address,
      qualification,
      profession,
      nominee,
      relationship,
      insuranceData,
    } = req.body;

    if (
      !salutation ||
      !gender ||
      !dob ||
      !age ||
      !address ||
      !qualification ||
      !profession ||
      !nominee ||
      !relationship ||
      !insuranceData
    ) {
      res.status(400).json({ message: "All fields are mandatory" });
    } else {
      const insurePurchaser = await user.create({
        salutation,
        name,
        email,
        gender,
        dob,
        age,
        address,
        qualification,
        profession,
        nominee,
        relationship,
        insuranceData,
      });

      res.status(201).json({ message: "Insurance posted", insurePurchaser });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error on insurance post" });
  }
});


const updateInsurance = asyncHandler(
    async (req, res) => {
        try {
          const userData = {...req.body, user_image: req.file.filename}
          const updateUser = await user.findByIdAndUpdate(req.params.id, userData, {new : true})
          res.status(200).json({ message: "Insurance gotten", updateUser});
        } catch (error) {
          console.error(error.message);
          res.status(400).json({ message: "Error on insurance update" });
        }
      }
)

const getInsurance = asyncHandler(
  async (req, res) => {
    try {
      const insuranceData = await user.find()
      if (insuranceData) {
        res.status(201).json({ message: "Insurance gotten successfully", insuranceData });
      } else {
        res.status(400).json({ message: "Error on insurance get method" });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: "Internal server error"});
    }
  }
)

const deleteInsurance = async (req, res) => {
  try {
    res.status(200).json({ message: "Insurance deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: "Error on insurance dlelete" });
  }
};

module.exports = {
  postInsurance,
  getInsurance,
  updateInsurance,
  deleteInsurance,
};
