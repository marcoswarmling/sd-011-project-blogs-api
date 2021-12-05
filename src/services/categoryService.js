const { Categories } = require('../models');
const { verifyToken } = require('../api/auth/jwt');

const getAll = async (token) => {
  try {
    verifyToken(token);
    const categories = await Categories.findAll();
  
    return categories;
  } catch (error) {
    return { message: 'Expired or invalid token' };
  }
};

const createCategory = async (name, token) => {
  try {
    verifyToken(token);
    const category = await Categories.create({ name });
    return category;
  } catch (error) {
    return { message: 'Expired or invalid token' };
  }
};

module.exports = {
  createCategory,
  getAll,
};