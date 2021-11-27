const Joi = require('joi');
const servicesPosts = require('../services/servicesPosts');

const schemaPosts = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const schemaEditPosts = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
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

const verifyEditFields = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (categoryIds) {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }

  const { error } = schemaEditPosts.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  return next();
};

const findPostById = async (req, res, next) => {
  const { params: { id }, userId } = req;
  const verifyId = await servicesPosts.findPostById(id, userId);
  if (verifyId.message) {
    return res.status(401).json({ message: verifyId.message });
  }

  return next();
};

module.exports = {
  verifyFields,
  verifyEditFields,
  findPostById,
};
