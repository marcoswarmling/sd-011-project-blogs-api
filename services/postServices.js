const { BlogPost, PostCategory } = require('../models');

const createPost = async (title, content, categoryId) => {
  const createResponse = await BlogPost.create({ title, content, userId: 'pegar pelo token' });
  // Deve ser feita uma validação se as categorias passadas existem)
  const createLinkResponse = await PostCategory.create('aqui vc vai ter que pegar o id gerado antes e user ele para criar vinculo com a categoria passada');
  return { type: 'success', payload: { id, name } };
};

module.exports = {
  createPost,
};