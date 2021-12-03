const { BlogPosts, Categories, User } = require('../models');

const categorieShow = [
  { model: User, as: 'user', attributes: { exclude: ['password'] } },
  { 
    model: Categories,
    as: 'categories',
    through: { attributes: [] }, 
    attributes: { exclude: ['PostsCategories'] },
  },
];

const create = async (title, content, userId) => {
  const result = await BlogPosts.create({ title, content, userId });
  
  return result;
};

// const getAll = async () => BlogPosts.findAll({ include: [{ all: true }] });

const getAll = async () => {
  try {
    const response = await BlogPosts.findAll({ 
      include: categorieShow,
    });

    console.log('testando get post service', response);

    return response;
  } catch (e) {
    return console.log(e);
  }
};

const getId = async (id) => {
  const result = await BlogPosts.findOne({
    where: { id },
    include: categorieShow,
   });

  if (!result) return { message: 'Post does not exist' };
  return result;
};

module.exports = { create, getAll, getId };