const Joi = require('joi');

const validateNewCategoryWithJoi = async (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};

module.exports = {
  validateNewCategoryWithJoi,
};
