const { Category } = require('../models');

const registerCategory = async (name) => {
  try {
    const category = await Category.create({
      name,
    });
    return category;
  } catch (err) {
    return err;
  }
};

const getAllCategories = async () => {
  try {
    const categories = await Category.findAll();
    return categories;
  } catch (err) {
    return err;
  }
};

const getCategoryById = async (id) => {
  try {
    const category = await Category.findOne({ where: { id } });

    if (category) {
      return category;
    }

    return null;
  } catch (err) {
    return err;
  }
};

module.exports = {
  registerCategory,
  getAllCategories,
  getCategoryById,
};
