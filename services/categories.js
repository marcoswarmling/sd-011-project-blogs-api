const { Categories } = require('../models');

const createCategory = async (data) => {
  const { name } = data;

  if (!name) {
    return { message: '"name" is required', status: 400 };
  }
  try {
    const newCategory = await Categories.create({ name });
    console.log('esse é o new', newCategory);

    return newCategory;
  } catch (error) {
    console.log(error.message);

    return { message: 'Algo deu errado', status: 500 };
  }
};

const getAllCategories = async () => {
  try {
    const allCategories = await Categories.findAll({
      attributes: ['id', 'name'],
    });
    return allCategories;
  } catch (error) {
    console.log(error.message);

    return { message: 'Algo deu errado', status: 500 };
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};