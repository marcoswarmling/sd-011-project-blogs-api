const { BlogPosts, PostsCategories, User } = require('../models');

const createPost = async ({ title, content, categoryIds }, { id }) => {
  const newPost = await BlogPosts.create({ title, content, userId: id });

  const newPostCategories = categoryIds
  .map((category) => ({ postId: newPost.id, categoryId: category }));
  
  await PostsCategories.bulkCreate(newPostCategories);

  return newPost;
};

const getAllPosts = async() => {
  const posts = await BlogPosts.findAll({
    include: [{ all: true }],
  });

  return posts;
}

module.exports = {
  createPost,
  getAllPosts,
};