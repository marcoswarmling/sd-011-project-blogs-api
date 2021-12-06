const { BlogPosts, Users, Categories } = require('../models');
const { getUserEmailServ } = require('./user');

async function insertPostServ(postData, email) {
  const { title, content } = postData;
  const insertPost = await BlogPosts.create(postData);
  const { id } = insertPost.dataValues;
  const userData = await getUserEmailServ(email);
  const userId = userData.dataValues.id;
  const response = { id, title, content, userId };
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

async function getPostByIdServ(id) {
  const postIdData = await BlogPosts.findOne(
    { 
      where: { id }, 
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories' },
      ],
    },
  );
  return postIdData;
}

module.exports = { insertPostServ, getPostsServ, getPostByIdServ };