const ApiError = require('../utils/ApiError');
const HttpCodes = require('../utils/HttpCodes');
const PostService = require('../services/post.services');
const CategoriesServices = require('../services/categories.services');

async function createPost(req, res, next) {
  try {
    const { title, content, categoryIds } = req.body;
    const { userId } = req;

    const allCategories = await CategoriesServices.getAllCategoriesInDB();
    const allCategoriesInDB = [];
    allCategories.forEach(({ dataValues: { id } }) => allCategoriesInDB.push(id));

    const invalidCategories = categoryIds.filter((id) => !allCategoriesInDB.includes(id));

    if (invalidCategories.length > 0) return next(ApiError.categoryIdNotFound());

      const createdPost = await PostService.createPostInDB({ userId, title, content, categoryIds });
      console.log(createdPost);
      return res.status(HttpCodes.code.CREATED).json(createdPost);
  } catch (err) {
    console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRROR', err);
    return next(ApiError.internalServerError());
  }
}

async function getAllPosts(_req, res, next) {
  try {
    const posts = await PostService.getAllPostsInDB();

    return res.status(HttpCodes.code.OK).json(posts);
  } catch (err) {
    console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRROR', err);
    return next(ApiError.internalServerError());
  }
}

module.exports = {
  createPost,
  getAllPosts,
};