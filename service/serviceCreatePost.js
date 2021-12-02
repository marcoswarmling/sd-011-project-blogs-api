const jwtDecode = require('jwt-decode');
const { BlogPosts, PostsCategories } = require('../models');

const serviceCreatePost = async (userData, userToken) => {
  const decodeJwt = jwtDecode(userToken);
  console.log('KLJFGSDLKJHgKEF', decodeJwt);
  const newPost = await BlogPosts.create({ 
    title: userData.title,
    content: userData.content,
    userId: decodeJwt.dataValues.id,
  });
  const createCategories = userData.categoryIds;
  createCategories.map(async (categoryId) => {
    await PostsCategories.create({ postId: newPost.id, categoryId });
  });
  
  return newPost;
};

module.exports = serviceCreatePost;
