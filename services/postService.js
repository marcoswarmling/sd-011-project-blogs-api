const { BlogPosts, PostsCategories } = require('../models');

async function createPost(postObj, id) {
  const { title, content, categoryIds } = postObj;

  const createdPost = await BlogPosts.create({ title, content, userId: id });
  
  const newPostCategories = categoryIds
    .map((category) => ({ postId: createdPost.id, categoryId: category }));

  try {
    await PostsCategories.bulkCreate(newPostCategories);
  } catch (error) {
    const err = JSON.stringify({ status: 400, message: '"categoryIds" not found' });
    throw new Error(err);
  }
  return createdPost;
}

async function getAllPosts() {
  const allPosts = BlogPosts.findAll({ include: [
    { all: true, attributes: { exclude: ['password'] } },
  ],
});
  return allPosts;
}
 
module.exports = {
  createPost,
  getAllPosts,
};
