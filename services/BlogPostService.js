const { User, Categories, BlogPosts } = require('../models');

const createBlogPost = async (title, content, userId) => {
  const result = await BlogPosts.create({ userId, title, content });
  return result; 
};

const getAllBP = async () => {
  console.log('cheguei no service');

  const data = await BlogPosts.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      // { model: Categories, as: 'categories', attributes: { include: ['id', 'name'] } },
    ],    
  });

  // https://stackoverflow.com/questions/49095292/exclude-primary-key-attributes-from-a-sequelize-query/49098682

  // { model: User, as: 'user', attributes: { exclude: ['password'] } },
  // { model: Categories, as: 'categories' },

  // const data = await BlogPosts.findAll({
  //   include: [
  //     { model: User, as: 'user', attributes: { exclude: ['password'] } },
  //     { model: Categories, as: 'Categories', through: { attributes: [] } },
  //   ],
  // });

  if (data) {
    return data;
  } 
  // console.log('Nao há BlogPosts');
  throw new Error('Não há nenhum BlogPost!');
};

module.exports = {
  createBlogPost,
  getAllBP,
};