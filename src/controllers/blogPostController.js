const blogPostService = require('../services/blogPostService');

const create = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const { id } = req.user;
  
    const insert = await blogPostService.create({ title, categoryIds, content, id });
  
    return res.status(insert.statusCode).json(insert.responseMessage);
  } catch (error) {
    console.error(error);
  }
};

/* const getAllCategories = async (req, res) => {
  try {
    const findCategories = await categorieService.getAllCategories();

    return res.status(findCategories.statusCode).json(findCategories.responseMessage);
  } catch (error) {
    console.error(error);
  }
};  */

module.exports = {
  create,
};