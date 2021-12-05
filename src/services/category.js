const AppError = require('../errorHandler/AppError');
const httpCodes = require('../constants/httpCodes.json');
const { Category } = require('../models');
const ajv = require('../schemas/validation');

exports.createCategory = async (category) => {
  const validate = ajv.getSchema('categories');
  const isValid = validate(category);
  if (isValid) return Category.create({ ...category });
  throw new AppError(httpCodes.HTTP_BAD_REQUEST, validate.errors[0].message);
};

exports.getCategories = async () => Category.findAll();
