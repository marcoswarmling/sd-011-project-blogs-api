const categoriesService = require('../service/categoriesService');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const newUser = await categoriesService.createCategory(
      name,
    );

    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createCategory,
};
