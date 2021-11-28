const joi = require('joi');

function validatePost(req, res, next) {
  const { body } = req;

  const { error } = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
    categoryIds: joi.array().required(),
  }).validate(body);

  if (error) {
    const errorMessage = error.details[0].message;
    return res.status(400).json({ message: errorMessage });
  }
  return next();
}

module.exports = {
  validatePost,
};