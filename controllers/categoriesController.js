const service = require('../services/categoriesService');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    // console.log('reqBodyController:', req.body);

    const newCategory = await service.create({ name });
    // console.log('newCategoryController:', newCategory);
    return res.status(201).json(newCategory);
  } catch (e) {
    res.status(400).json({ err: e.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await service.getAll();
    // console.log('getAllcategoriesController', categories);
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create,
  getAll,
};
