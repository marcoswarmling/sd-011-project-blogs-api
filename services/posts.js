const { BlogPosts } = require('../models');
const { getUserEmailServ } = require('./user');

async function insertPostServ(postData, email) {
  const { title, content } = postData;
  const insertPost = await BlogPosts.create(postData);
  const { id } = insertPost.dataValues;
  const userData = await getUserEmailServ(email);
  const userId = userData.dataValues.id;
  const response = { id, title, content, userId };
  console.log('service', response);
  return response;
}
async function getPostsServ() {
  const postsData = await BlogPosts.findAll();
  const response = postsData[0];
  return response;
}
module.exports = { insertPostServ, getPostsServ };