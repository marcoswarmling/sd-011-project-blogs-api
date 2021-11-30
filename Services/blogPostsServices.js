const { BlogPosts, Users, Categories } = require('../models/index');

const createPosts = async ({ title, content, data }) => {
  const create = await BlogPosts.create({ userId: data.id, title, content });
  const modelOfPost = {
    id: create.id,
    userId: data.id,
    title,
    content,
  }; 
  return modelOfPost;
};

const getPost = async () => {
  const blogPosts = await BlogPosts.findAll({ include: [
  {
    model: Users,
    as: 'user',
    attributes: { exclude: ['password'] },
  },
  {
    model: Categories,
    as: 'categories',
    through: { attributes: [] },
  },
  ] });
  if (!blogPosts) throw new Error('Tem isso aqui não fera!kkk');
  return blogPosts;
};

module.exports = {
  createPosts,
  getPost,
};
