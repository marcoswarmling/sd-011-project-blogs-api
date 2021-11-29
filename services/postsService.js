const jwt = require('jsonwebtoken');
const { BlogPost, PostsCategory } = require('../models');
const { getUserById } = require('./userServices');

const secretKey = process.env.JWT_SECRET;

const createPost = async (token, title, content, categoryIds) => {
  const decodedToken = jwt.verify(token, secretKey);
  const userId = decodedToken.data.id;
  const createdPost = await BlogPost.create({ title, content, userId });

  await categoryIds.map(async (i) => {
    await PostsCategory.create({ postId: createdPost.dataValues.id, categoryId: i });
  });
  return createdPost;
};

const getAllPosts = async () => {
  const postsData = await BlogPost.findAll({ include: [{ all: true }] });

  const posts = postsData.map((i) => i.dataValues);
  const postsUser = await Promise.all(posts.map(async (i) => {
    const user = await getUserById(i.userId);
    const { password, ...userInfo } = user.dataValues;
    return { ...i, user: userInfo };
  }));
  console.log(postsUser);

  return postsUser;
};

const getPostById = async (id) => {
  const postData = await BlogPost.findOne({ where: { id }, include: [{ all: true }] });
  return postData;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};