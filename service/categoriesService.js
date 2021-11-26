const { verifyToken } = require('../helpers/handleToken');
const { Category } = require('../models');

const create = async (category, token) => {
  try {
    verifyToken(token);
    const { dataValues } = await Category.create(category);
    return dataValues;
  } catch (error) {
    return { message: 'Expired or invalid token' };
  }
};

const getAll = async (token) => {
  try {
    verifyToken(token);
    const categories = await Category.findAll();
    return categories;
  } catch (_error) {
    return { message: 'Expired or invalid token' };
  }
};

module.exports = {
  getAll,
  create,
};
