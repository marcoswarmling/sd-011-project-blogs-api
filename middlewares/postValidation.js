const Joi = require('joi');
const CategoriesService = require('../services/categoriesService');

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
module.exports = { postValidate, validateCategory }; 
