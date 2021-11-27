const Joi = require('joi');
const servicesPosts = require('../services/postServices');

const postSchema = Joi.object({
  title:
    Joi.string()
    .required(),
  content:
    Joi.string()
    .required(),
  categoryIds:
    Joi.array()
    .items(Joi.number())
    .required(),
});

const postValidations = async (req, res, next) => {
  const { error } = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  
  const { categoryIds } = req.body;
  const validateCategories = await servicesPosts.findCategories(categoryIds);
  if (validateCategories) {
    return res.status(400).json({ message: validateCategories.message });
  }
  next();
};

module.exports = {
  postValidations,
};