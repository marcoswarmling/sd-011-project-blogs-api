const ServiceCategory = require('../service/serviceCategory');

function validTitle(req, res, next) {
  const { title } = req.body;
  if (!title || title === '') {
    return res.status(400).json({ message: '"title" is required' });
  }
  next();
}

function validContent(req, res, next) {
  const { content } = req.body;
  if (!content || content === '') {
    return res.status(400).json({ message: '"content" is required' });
  }
  next();
}

function validCategory(req, res, next) {
  const { categoryIds } = req.body;
  if (!categoryIds || categoryIds.length === 0) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }

  next();
}

async function categoriesExists(req, res, next) {
  const { categoryIds } = req.body;
  const allCategories = await ServiceCategory.getAll();
  const findCategory = allCategories.map((el) => el.dataValues.id);
  const categoryExists = categoryIds.every((el) => findCategory.includes(el));

  if (!categoryExists) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
}

module.exports = { validTitle, validContent, validCategory, categoriesExists };
