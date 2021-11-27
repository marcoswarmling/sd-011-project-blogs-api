const { Categories } = require('../models');
const categoryValidatiton = require('../validations/createCategoryValidation');
const tokenValidation = require('../validations/tokenValidation');

const createCategory = async (name, authorization) => {
  try {
    tokenValidation.tokenFieldValidation(authorization);
    categoryValidatiton.validCategoryField(name);

    const response = await Categories.create({ name });
    return response;
  } catch (e) {
    return { error: { message: e.message, code: e.code } };
  }
};

const getCategories = async (authorization) => {
  try {
    tokenValidation.tokenFieldValidation(authorization);

    const response = await Categories.findAll();
    return response;
  } catch (e) {
    return { error: { message: e.message, code: e.code } };
  }
};

module.exports = {
  createCategory,
  getCategories,
};