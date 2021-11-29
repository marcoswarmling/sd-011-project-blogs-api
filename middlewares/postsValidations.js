const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { getAllCategories } = require('../services/categoriesService');
const { getPostById } = require('../services/postsService');

const secretKey = process.env.JWT_SECRET;

const postSchema = Joi.object({
  title:
    Joi.string()
    .empty()
    .required()
    .messages({
      'string.empty': '"title" is not allowed to be empty',
      'any.required': '"title" is required',
    }),
  content:
    Joi.string()
    .empty()
    .required()
    .messages({
      'string.empty': '"content" is not allowed to be empty',
      'any.required': '"content" is required',
    }),
  categoryIds:
    Joi.array()
    .items(Joi.number())
    .required()
    .messages({
      'any.required': '"categoryIds" is required',
    }),
});

const postsUpdateSchema = Joi.object({
  title:
    Joi.string()
    .empty()
    .required()
    .messages({
      'string.empty': '"title" is not allowed to be empty',
      'any.required': '"title" is required',
    }),
  content:
    Joi.string()
    .empty()
    .required()
    .messages({
      'string.empty': '"content" is not allowed to be empty',
      'any.required': '"content" is required',
    }),
});

const validatePostFields = (req, res, next) => {
  const { error } = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validateExistingCategories = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categories = await getAllCategories();
  const checkForExistingCategories = categories.map((i) => i.id);
  const check = categoryIds.every((i) => checkForExistingCategories.includes(i));
  if (!check) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

const validatePostFieldsToUpdate = (req, res, next) => {
  const { categoryIds } = req.body;
  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });
  const { error } = postsUpdateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validateUserPost = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const decodedToken = jwt.verify(token, secretKey);
  const userId = decodedToken.data.id;

  const checkForUser = await getPostById(id);
  if (checkForUser.dataValues.userId !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

module.exports = {
  validatePostFields,
  validateExistingCategories,
  validatePostFieldsToUpdate,
  validateUserPost,
};