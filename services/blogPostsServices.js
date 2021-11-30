const { BlogPosts } = require('../models/index');
const { Users, Categories } = require('../models/index');

const getAllBlogPosts = async () => {
  const blogpostsFindAll = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  console.log(blogpostsFindAll);
  return blogpostsFindAll;
};

const createBlogPosts = async ({ title, content, id }) => {
  const blogpostsCreate = await BlogPosts.create({ userId: id, title, content });
  return blogpostsCreate;
};

module.exports = { createBlogPosts, getAllBlogPosts };