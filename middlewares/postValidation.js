const Joi = require('joi');
const CategoriesService = require('../services/categoriesService');
const { BlogPosts } = require('../models');

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
  categoryIds.forEach(async (categoryId) => {
    const categoryExist = await CategoriesService.findById(categoryId);
    if (!categoryExist) {
      return res.status(400).json({ 
        message: '"categoryIds" not found',
      });
    }
      });
   next();
    };

    const validadeUserIdOnDeleted = async (req, res, next) => {
      const { id } = req.params;
      console.log(id);
      const post = await BlogPosts.findByPk(id);
      if (
        !post) {
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
module.exports = { postValidate, validateCategory, validadeUserIdOnDeleted }; 
