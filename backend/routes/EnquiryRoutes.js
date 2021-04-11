const router = require("express").Router();
const { createEnquiry } = require("../controllers/EnquiryControllers");

// @desc Create a new enquiry
// @route /api/enquiry
// @access public

router.post("/", createEnquiry);

module.exports = router;
