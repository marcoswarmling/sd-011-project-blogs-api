const { BlogPosts, Categories, Users } = require('../models');

const create = async ({ title, content, categoryIds, id }) => {
  // encontro todas as categorias
  const getAllBlogPosts = await Categories.findAll({
    where: { id: categoryIds },
  });
  // comparo para verificar se alguma não foi encontrada --> se sim, devolvo o not found
  if (getAllBlogPosts.length !== categoryIds.length) {
    return { err: { code: 400, message: { message: '"categoryIds" not found' } } };
  }
  // crio o post
  const blogPost = await BlogPosts.create({ title, content, userId: id });
  // console.log('PostService', blogPost);
  return blogPost;
};

const getAll = async () => {
  const blogPosts = await BlogPosts.findAll({ 
    include: [
      { model: Users, as: 'user' }, // atenção no alias
      { 
        model: Categories,
        as: 'categories',
      },
    ],
  });
  // console.log('postGetAllService', blogPosts);

  return blogPosts;
};

module.exports = {
  create,
  getAll,
}; 