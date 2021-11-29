const { BlogPosts, Users, Categories } = require('../models');

const getAllPosts = async () => {
  const getPosts = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } }],
  });
  // console.log(getPosts, 'GETPOSTS');
  return getPosts;
};

const createPost = async ({ title, content, data }) => {
  //  console.log('Entrou no CREATE', title, content, data);
  const createdPost = await BlogPosts.create({
    userId: data.id,
    title,
    content,
  });
  // console.log(createdPost, 'CREATED-POST');
  return createdPost;
};

module.exports = {
  getAllPosts,
  createPost,
};
