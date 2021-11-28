const Joi = require('joi');

const schemaLogin = Joi.object().keys({
  name: Joi.string().required(),
});

const validateCategorieJoi = async (req, res, next) => {
  const validate = schemaLogin.validate(req.body);
  if (validate.error) {
    return res.status(400).json({
      message: validate.error.details[0].message,
    });
  }
  next();
};

module.exports = {
  validateCategorieJoi,
};