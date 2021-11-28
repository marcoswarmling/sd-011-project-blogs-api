const { BlogPost, User, Category } = require('../models');
const { isValidUser, isValidCategory, validPost } = require('../utils/validations');

const postRegister = async (post, userEmail) => {
  const { title, content, categoryIds } = post;

  const validCategoryOne = await isValidCategory(categoryIds[0]);
  const validCategoryTwo = await isValidCategory(categoryIds[1]);

  if (!validCategoryOne.error && !validCategoryTwo.error) {
    const result = await isValidUser(userEmail);
    const { id } = result;
    if (!result.error) return BlogPost.create({ title, content, userId: id, categoryIds });
    return result;
  } return ({ error: validCategoryOne.error || validCategoryTwo.error });
};

const getAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return result;
};

const getPostById = async (id) => validPost(id);

module.exports = {
  postRegister,
  getAllPosts,
  getPostById,
};
