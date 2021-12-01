const Joi = require('joi');

const validateUser = (req, _res, next) => {
  const JoiResult = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string().allow(null).allow(''),
  }).validate(req.body);

  return JoiResult.error
    ? next(
      {
        code: 'invalidData',
        message: JoiResult.error.details[0].message,
      },
    )
    : next();
};

module.exports = {
  validateUser,
};
