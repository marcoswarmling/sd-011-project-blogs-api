const { Category } = require('../models');

const createNewCategorie = async ({ name }) => {
  const category = await Category.findOne({ where: { name } });

  if (category) return { statusCode: 409, response: { message: 'Category already registered' } };

  const returnCategoryCreate = await Category.create({ name });

  return { statusCode: 201, response: returnCategoryCreate };
 };

 const getAllCategories = async () => {
  const categories = await Category.findAll();

  return { statusCode: 200, response: categories };
};

 module.exports = {
  createNewCategorie,
  getAllCategories,
};