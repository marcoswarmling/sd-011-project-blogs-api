const { categoryServices } = require('../services');
const httpCodes = require('../constants/httpCodes.json');

exports.createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCategory = await categoryServices.createCategory({ name });
    return res.status(httpCodes.HTTP_CREATED).json({ ...newCategory.dataValues });
  } catch (error) {
    return next(error);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await categoryServices.getCategories();
    return res.status(httpCodes.HTTP_OK).json(categories);
  } catch (error) {
    next(error);
  }
};
