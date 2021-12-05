const { getAll } = require('../services/categoriesService');
const { createPost } = require('../schema');

const valPost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });

  const { error } = createPost.validate({ title, content, categoryIds });

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

const valCategoriesId = async (req, res, next) => {
  const { categoryIds } = req.body;

  const categoriesData = await getAll();
  const id = categoriesData.map((cat) => cat.dataValues.id);
  const includesId = id.includes(Number(categoryIds));

  if (!includesId) return res.status(400).json({ message: '"categoryIds" not found' });
  
  next();
};

module.exports = {
  valPost,
  valCategoriesId,
};