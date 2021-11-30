const joi = require('joi');

const { getCategoryById } = require('../services/categories');

const postCategorieSchema = joi.object({
  name: joi.string().required(),
});

const checkIfCategory = async (req, res, next) => {
  const {
    categoryIds,
  } = req.body;

  let totalOfErrors = 0;

  await Promise.all(categoryIds.map(async (id) => {
    const category = await getCategoryById(id);

    if (!category) {
      totalOfErrors += 1;
    }
  }));

  if (totalOfErrors >= 1) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  return next();
};

module.exports = {
  postCategorieSchema,
  checkIfCategory,
};