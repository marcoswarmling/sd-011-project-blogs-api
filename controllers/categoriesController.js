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

module.exports = {
  create,
};
