require("dotenv").config();
const Enquiry = require("../models/Enquiry");
const { sendEmailOptions } = require("../utils/email");
const { enquiryValidation } = require("../utils/validation");

const validation = {
  createEnquiry: enquiryValidation,
};

const handleValidation = (body, type) => {
  const { error } = validation[type](body);
  if (error) {
    throw Error(error.details[0].message);
  }
};

const createEnquiry = async (req, res) => {
  try {
    await handleValidation(req.body, "createEnquiry");
    const enquiry = await Enquiry.create(req.body);
    await sendEmailOptions(req.body);
    res.status(200).json(enquiry);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createEnquiry };
