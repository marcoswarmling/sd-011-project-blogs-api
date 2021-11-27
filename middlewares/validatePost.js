const { Categorie } = require('../models');
const { validateCreatePost, validateUpdatePost } = require('../schemas/index');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }

  const { error } = validateCreatePost.validate({
    title, content, categoryIds,
  });

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const categories = await Categorie.findAll();

  const categoryIdsFromDB = categories.map(({ id }) => id);

  const allCategoryExists = (categoryIds || []).every((id) =>
    categoryIdsFromDB.includes(id));

  if (!allCategoryExists) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

const validUpdatePost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (categoryIds) {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }

  const { error } = validateUpdatePost.validate({ title, content });

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = {
  validatePost,
  validUpdatePost,
};
