const Joi = require('joi');
// const CategoriesService = require('../services/categoriesService');
const { BlogPosts, Categories } = require('../models');

const schemaPost = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const postValidate = async (req, res, next) => {
  const validate = schemaPost.validate(req.body);
  if (validate.error) {
    return res.status(400).json({
      message: validate.error.details[0].message,
    });
  }
  return next();
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  // let result = false;
  // await categoryIds.forEach(async (categoryId) => {
  //   const categoryExist = await PostsCategories.findByPk(categoryId);
  //   if (!categoryExist) {
  //     result = true;
  //   }
  // });
  // const result = data.some((category) => {
  //   category.id.include()
  // });
  const data = await Categories.findAll();
  const categoryExist = await categoryIds.every((id) =>
  data.some((category) => category.id === id));
  console.log(`retorno ${categoryExist}`);
  if (!categoryExist) {
    console.log(`passou aqui ${categoryExist}`);
    return res.status(400).json({
      message: '"categoryIds" not found',
    });
  }
  next();
};

const validadeUserIdOnDeletedOrUpdate = async (req, res, next) => {
  const { id } = req.params;
  const post = await BlogPosts.findByPk(id);
  if (!post) {
    return res.status(404).json({
      message: 'Post does not exist',
    });
  }
  if (post.dataValues.userId !== req.user.id) {
    return res.status(401).json({
      message: 'Unauthorized user',
    });
  }
  next();
};

const schemaUpdatePost = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

const postUpdateValidate = async (req, res, next) => {
  if (req.body.categoryIds) {
    return res.status(400).json({
      message: 'Categories cannot be edited',
    });
  }
  const validate = schemaUpdatePost.validate(req.body);
  if (validate.error) {
    return res.status(400).json({
      message: validate.error.details[0].message,
    });
  }
  return next();
};

module.exports = {
  postValidate,
  validateCategory,
  validadeUserIdOnDeletedOrUpdate,
  postUpdateValidate,
};
