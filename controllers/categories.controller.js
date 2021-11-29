const ApiError = require('../utils/ApiError');
const HttpCodes = require('../utils/HttpCodes');
const CategoryServices = require('../services/categories.services');

async function createCategory(req, res, next) {
  try {
    const { name } = req.body;

    if (name) {
      const createdCategory = await CategoryServices.createCategoryInDB(name);
      return res.status(HttpCodes.code.CREATED).json({ createdCategory });
    }
  
    return next(ApiError.categoryNameRequired());
  } catch (err) {
    console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRROR', err);
    return next(ApiError.internalServerError());
  }
}

module.exports = {
  createCategory,
};