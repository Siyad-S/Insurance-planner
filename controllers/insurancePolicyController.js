const asyncHandler = require("express-async-handler");
const policy = require("../models/policyModel");

const postPolicies = asyncHandler(async (req, res) => {
  try {
    const { insurance_name, amount, insurance_details } = req.body;

    if (insurance_name && amount && insurance_details) {
      const addedPolicy = await policy.create({
        insurance_name,
        amount,
        insurance_details,
      });
      res.status(201).json({ message: "Policy added", addedPolicy });
    } else {
      res.status(400).json({ message: "All fields are mandatory" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error: " + error.message });
  }
});

const getPolicies = asyncHandler(async (req, res) => {
  try {
    const getPolicies = await policy.find();
    if (getPolicies) {
      res.status(200).json({
        message: "Policies are retrieved successfully",
        getPolicies,
      });
    } else {
      res.status(400).json({
        message: "Error occurred while retrieving policies",
        getPolicies,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error: " + error.message });
  }
});

module.exports = {
  postPolicies,
  getPolicies,
};
