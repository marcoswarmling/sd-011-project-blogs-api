const { getAll } = require('../services/CategoryService');
const getAllCategories = require('../helpers/checkCategory');

const titleExists = async (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  next();
};

const contentExists = async (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: '"content" is required' });
  next();
};

const categoryIdExists = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  next();
};

const categoryIdIsRequired = async (req, res, next) => {
  const { categoryIds } = req.body;

  const allCategories = await getAll();
  // console.log('ALL CATEGORIRES: ', allCategories);
  const verification = getAllCategories(categoryIds, allCategories.id);
  // console.log('VERIFICATION: ', verification);
  if (!verification) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
};

module.exports = {
  titleExists,
  contentExists,
  categoryIdExists,
  categoryIdIsRequired,
};
