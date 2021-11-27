const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res, next) => {
  try {
    const { body } = req;

    const response = await categoriesService.createCategory(body);

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createCategory,
};