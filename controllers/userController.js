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
      qualifications,
      profession,
      nominee,
      relationship,
      insuranceData,
    } = req.body;

    console.log(req.body);

    if (
      !salutation ||
      !name ||
      !email ||
      !gender ||
      !dob ||
      !age ||
      !address ||
      !qualifications ||
      !profession ||
      !nominee ||
      !relationship||
      !insuranceData 
    ) {
      res.status(400).json({message: "All fields are mandatory"});
    } else {
      const insurePurchaser = await user.create({
        salutation,
        name,
        email,
        gender,
        dob,
        age,
        address,
        qualifications,
        profession,
        nominee,
        relationship,
        insuranceData,
        insuranceStatus: "Pending",
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
          const userData = {...req.body}
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
      const { name, email } = req.query;
      if (name || email) {
        const insuranceData = await user.find({
          $or: [
            { $regex: new RegExp(name, "i") },
            { $regex: new RegExp(email, "i") },
          ],
        });
        console.log("search result:", insuranceData);
        res.status(200).json({ message: "searched data", insuranceData });
      } else {
        const insuranceData = await user.find();
        console.log("all data:", insuranceData);
        res.status(200).json({ message: "Insurance gotten successfully", insuranceData });
      }
    } catch (error) {
      console.error("Error during search:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);




const getSingleInsurance = asyncHandler(
  async (req, res) => {
    try {
      const id = req.params.id
      console.log(id)
      const insuranceData = await user.findById(id)
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
  getSingleInsurance,
  updateInsurance,
  deleteInsurance,
};
