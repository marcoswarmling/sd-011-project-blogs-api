const ApiError = require('../utils/ApiError');
const HttpCodes = require('../utils/HttpCodes');
const CategoryServices = require('../services/categories.services');

async function createCategory(req, res, next) {
  try {
    const { name } = req.body;

    if (name) {
      const id = await CategoryServices.createCategoryInDB(name);
      return res.status(HttpCodes.code.CREATED).json({ id, name });
    }
  
    return next(ApiError.requiredCategoryName());
  } catch (err) {
    console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRROR', err);
    return next(ApiError.internalServerError());
  }
}

async function getAllCategories(_req, res, next) {
  try {
    const categories = await CategoryServices.getAllCategoriesInDB();

    return res.status(HttpCodes.code.OK).json(categories);
  } catch (err) {
    console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRROR', err);
    return next(ApiError.internalServerError());
  }
}


module.exports = {
  createCategory,
  getAllCategories,
};