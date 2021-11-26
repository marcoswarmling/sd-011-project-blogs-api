const Joi = require('joi');
const servicesPosts = require('../services/servicesPosts');

const schemaPosts = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const verifyFields = async (req, res, next) => {
  const { error } = schemaPosts.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const { categoryIds } = req.body;
  const validateCategories = await servicesPosts.findcategories(categoryIds);

  if (validateCategories) {
    return res.status(400).json({ message: validateCategories.message });
  }

  return next();
};

module.exports = {
  verifyFields,
};
