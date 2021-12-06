const { BlogPosts } = require('../models');
const { Categories } = require('../models');

const createPost = async (post, id) => {
  const postUser = {
    title: post.title,
    content: post.content,
    userId: id,
  };
  const result = await BlogPosts.create(postUser);
  return result;
};

const findCategories = async (idCategory) => {
  const result = await idCategory.map((id) => Categories.findOne({ where: { id } }));
  return Promise.all(result).then((values) => values);
};

module.exports = {
  createPost,
  findCategories,
};