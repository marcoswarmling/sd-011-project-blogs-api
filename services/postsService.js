const jwt = require('jsonwebtoken');
const { BlogPost } = require('../models');
// const { getUserById } = require('./userServices');

const secretKey = process.env.JWT_SECRET;

const createPost = async (token, title, content) => {
  const decodedToken = jwt.verify(token, secretKey);
  const userId = decodedToken.data.id;
  const createdPost = await BlogPost.create({ title, content, userId });
  return createdPost;
};

const getAllPosts = async () => {
  const postsData = await BlogPost.findAll({ include: [{ all: true }] });

  // const posts = postsData.map((i) => i.dataValues);
  // const postsUser = await Promise.all(posts.map(async (i) => {
  //   const user = await getUserById(i.userId);
  //   return { ...i, user: user.dataValues };
  // }));

  // const postsWithCategory = await Promise.all(postsUser.map(async (i) => {
  //   console.log(i);

  // }));
  const posts = postsData.map((i) => {
    const user = i.dataValues.users.dataValues;
    const categories = i.dataValues.categories
    .map((e) => ({ id: e.dataValues.id, name: e.dataValues.name }));
    return {
      id: i.dataValues.id,
      title: i.dataValues.title,
      content: i.dataValues.content,
      userId: i.dataValues.userId,
      published: i.dataValues.published,
      updated: i.dataValues.updated,
      user,
      categories,
    };
  });
  return posts;
};

module.exports = {
  createPost,
  getAllPosts,
};