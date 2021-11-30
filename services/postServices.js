const { BlogPosts, PostsCategories, Categories } = require('../models');
const createPostValidatiton = require('../validations/createPostValidation');
const tokenValidation = require('../validations/tokenValidation');

const verifyCategoryExists = async (categoryIds) => {
  const category = await Categories.findAll({ raw: true, where: { id: categoryIds } });
  if (category.length === 0) {
    const message = new Error('"categoryIds" not found');
    message.code = 400;
    throw message;
  }
};

const createPost = async (title, content, categoryIds, authorization) => {
  try {
    tokenValidation.tokenFieldValidation(authorization);
    createPostValidatiton.validPostFields({ title, content, categoryIds });
    await verifyCategoryExists(categoryIds);

    const { id: userId } = createPostValidatiton.getUserFromToken(authorization);

    const response = await BlogPosts.create({ title, content, categoryIds, userId });
    const { id: postId } = response;

    await categoryIds.forEach(async (categoryId) => {
      await PostsCategories.create({ categoryId, postId });
    });

    return response;
  } catch (e) {
    return { error: { message: e.message, code: e.code } };
  }
};

module.exports = { createPost };