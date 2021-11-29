const { BlogPosts, Users, Categories } = require('../models/index');

const createPosts = async (data, title, content) => {
  const create = await BlogPosts.create({ title, content, userId: data.id });
  console.log(create, '-----> CREATE');
  const modelOfPost = {
      id: create.id,
      userId: create.userId,
      title,
      content,
    };
    console.log(modelOfPost, '----->MOdel POst');
  return modelOfPost;
};

const getPost = async () => {
  const blogPosts = await BlogPosts.findAll({ include: [
  {
    model: Users,
    as: 'users',
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
