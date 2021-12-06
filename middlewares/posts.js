const Joi = require('joi');
const { getCategoryById } = require('../services/categories');

const validateCreatePostWithJoi = async (req, _res, next) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};

const validateRegisteredCategories = async (req, res, next) => {
  const { categoryIds } = req.body;

  const listCategories = await Promise.all(
    categoryIds.map(async (id) => getCategoryById(id)),
  );

  if (listCategories.some((category) => !category)) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

module.exports = {
  validateCreatePostWithJoi,
  validateRegisteredCategories,
};
