const { BlogPosts, PostsCategories } = require('../models');

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

module.exports = {
  create,
  createPostCategories,
}; 