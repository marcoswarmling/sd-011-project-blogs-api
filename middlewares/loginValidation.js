const Joi = require('joi');

const schemaUserLogin = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const LoginPostValidate = async (req, res, next) => {
  const validate = schemaUserLogin.validate(req.body);
  if (validate.error) {
    return res.status(400).json({
      message: validate.error.details[0].message,
    }); 
  }
  return next();
};

module.exports = { LoginPostValidate }; 