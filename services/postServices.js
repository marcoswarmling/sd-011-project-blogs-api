const { BlogPosts, PostsCategories, Categories, Users } = require('../models');
const createPostValidatiton = require('../validations/createPostValidation');
const tokenValidation = require('../validations/tokenValidation');

// Para usar o parâmetro raw, consultei este tópico:
// https://stackoverflow.com/questions/46380563/get-only-datavalues-from-sequelize-orm
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

const getAllPosts = async (authorization) => {
  try {
    tokenValidation.tokenFieldValidation(authorization);
    // const { id: userId } = createPostValidatiton.getUserFromToken(authorization);

    const posts = await BlogPosts.findAll({
      include: [
        { model: Categories, as: 'categories', through: { attributes: [] } },
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      ] });
    console.log(posts);
    return posts;
  } catch (e) {
    return { error: { message: e.message, code: e.code } };
  }
};

module.exports = { createPost, getAllPosts };