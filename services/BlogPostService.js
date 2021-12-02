const { User, Categories, BlogPosts } = require('../models');

const createBlogPost = async (title, content, userId) => {
  const result = await BlogPosts.create({ userId, title, content });
  return result; 
};

const getAllBP = async () => {
  // console.log('cheguei no service');

  const data = await BlogPosts.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],    
  });

  /* Referência da sintaxe acima
   https://stackoverflow.com/questions/49095292/exclude-primary-key-attributes-from-a-sequelize-query/49098682 */

  if (data) {
    return data;
  } 
  throw new Error('Não há nenhum BlogPost!');
};

const getById = async (id) => {
    const getPost = await BlogPosts.findByPk(id);
    if (getPost.id === null) throw new Error('Post does not exist');
  
    const data = await BlogPosts.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
    });
  
    return data;
};

module.exports = {
  createBlogPost,
  getAllBP,
  getById,
};