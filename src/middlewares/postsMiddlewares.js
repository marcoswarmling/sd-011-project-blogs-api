const { postSchema } = require('./postValidator');
const { categoryRequired, categoryNotFound } = require('../errorText');
const categoriesServices = require('../services/categoriesServices');

const postsValidation = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    if (!categoryIds) return res.status(400).json(categoryRequired);

    const { error } = postSchema.validate({ title, content });
    
    if (error) return res.status(400).json({ message: error.details[0].message });

    next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const validateCategories = async (req, res, next) => {
  try {
    const { categoryIds } = req.body;

    const getCategories = await categoriesServices.getAll();
  
    const checkCategories = getCategories.map((category) => category.id);
  
    const check = categoryIds.every((item) => checkCategories.includes(item));
  
    if (!check) return res.status(400).json(categoryNotFound);
  
    next();
  } catch (error) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }
};

module.exports = {
  postsValidation,
  validateCategories,
};
