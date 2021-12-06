const { BlogPosts, Users, Categories } = require('../models');
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
  const postsData = await BlogPosts.findAll(
    { 
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories' },
      ],
    },
  );
  return postsData;
}
module.exports = { insertPostServ, getPostsServ };