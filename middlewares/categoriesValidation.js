const joi = require('joi');

function validateCategories(req, res, next) {
  const { body } = req;
    const { error } = joi.object({
      name: joi.string().required(),
    }).validate(body);
    
    if (error) {
      const errorMessage = error.details[0].message;
      return res.status(400).json({ message: errorMessage });
    }
    return next();
  }

module.exports = {
  validateCategories,
};
