const { BlogPosts, PostsCategories} = require('../models');

const createPost = async ({ title, content, categoryIds}, { id }) => {
  const newPost = await BlogPosts.create({ title, content, userId: id});

  categoryIds.forEach((category) => {
    await PostsCategories.create({postId: newPost.id, categoryId: category});
  });

  return newPost;
};

module.exports = {
  createPost,
}