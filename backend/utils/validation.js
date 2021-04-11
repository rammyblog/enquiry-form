const Joi = require("joi");

const enquiryValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
      })
      .required(),
    subject: Joi.string().min(3).max(1500).required(),
    message: Joi.string().min(3).max(1500).required(),
  });
  return schema.validate(data);
};

module.exports = { enquiryValidation };
