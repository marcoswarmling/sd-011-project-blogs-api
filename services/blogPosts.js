const { BlogPost, Category, User } = require('../models');
const { status, postMessages } = require('../Helpers/status&messages');

const createPost = async (title, content, categoryIds, userId) => {
  const categories = await Category.findAll({ where: { id: categoryIds } });
  if (categories.length !== categoryIds.length) {
    return { status: status.badRequest, message: postMessages.categoryIdNotFound };
  }
  const { dataValues: newPost } = await BlogPost.create({ title, content, userId });
  return newPost;
};

const getAllPosts = async () => {
  console.log('cheguei no service');
const allPosts = await BlogPost.findAll({
  include: [
    { model: User, as: 'User', attributes: { exclude: ['password'] } },
    { model: Category, as: 'Categories' },
  ],
});
if (!allPosts) {
  return { status: 404, message: 'no post' };
}
  return allPosts;
};

module.exports = { createPost, getAllPosts };
