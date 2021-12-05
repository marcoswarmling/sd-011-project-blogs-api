const { Categories } = require('../models');
const { verifyToken } = require('../api/auth/jwt');

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
};