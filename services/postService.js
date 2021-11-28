const { BlogPosts, PostsCategories} = require('../models');

const createPost = async ({ title, content, categoryIds}, { id }) => {
  const newPost = await BlogPosts.create({ title, content, userId: id});

  const newPostCategories = categoryIds.map((category) => {
    return { postId: newPost.id, categoryId: category };
  })
  
  await PostsCategories.bulkCreate(newPostCategories);
  

  return newPost;
};

module.exports = {
  createPost,
}