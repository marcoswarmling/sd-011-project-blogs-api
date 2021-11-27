const { BlogPosts, PostsCategories, Users, Categories } = require('../models');

const create = async ({ title, content, id }) => {
  const newPost = await BlogPosts.create({ title, content, userId: id });
  if (!newPost) {
    throw new Error('Invalid Operation');
  }
 return newPost;
};

const createPostCategories = async ({ postId, categoryId }) => {
  const newPostCategorys = await PostsCategories.create({ postId, categoryId });
  if (!newPostCategorys) {
    throw new Error('Invalid Operation');
  }
  return newPostCategorys;
};

const findAll = async () => {
  const posts = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user' },
      { model: Categories, as: 'categories' },
    ],
  });
  if (!posts) {
    throw new Error('Invalid Operation');
  }
  return posts;
};

module.exports = {
  create,
  createPostCategories,
  findAll,
}; 