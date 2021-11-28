const joi = require('joi');

function validateUser(req, res, next) {
  const { body } = req;

  const { error } = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().length(6).required(),
    image: joi.string(),
  }).validate(body);
  
  if (error) {
    // console.log(error);
    const errorMessage = error.details[0].message;
    return res.status(400).json({ message: errorMessage });
  }
  return next();
}

module.exports = {
  validateUser,
};
