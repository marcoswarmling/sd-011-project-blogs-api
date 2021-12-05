const categoriesService = require('../Services/categorieService');

const createCategories = async (request, response) => {
   const categories = await categoriesService.createCategories(request.body);
   return response.status(201).json(categories);
};

module.exports = {
  createCategories,
};