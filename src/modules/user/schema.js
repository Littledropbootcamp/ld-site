const Joi = require("joi");


exports.signupSchemaValidator = Joi.object().keys({
    name: Joi.string().required(),
  
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
  
  });

  exports.enquirySchemaValidator = Joi.object().keys({
    name: Joi.string().required(),
  
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
      
    message: Joi.string().required(),
  
  });