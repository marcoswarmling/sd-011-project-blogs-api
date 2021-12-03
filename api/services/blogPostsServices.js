const { Users, Categories, BlogPosts } = require('../models');

const verifyCategory = async (categoryIds) => { // função auxiliar, criada para verificar se a categoria existe
  const findCategoryId = await Categories.findAll(); // lista todas as categorias
  const listCategories = findCategoryId.map((ids) => ids.id); // procura os ids e inclui num array
  const allCategories = categoryIds.every((id) => listCategories.includes(id)); // verifica se todos os arrays estão contidos em um novo array
  return allCategories; // retorna true ou false
};

const createPost = async ({ title, categoryIds, content }) => {
  const validateCategory = await verifyCategory(categoryIds); // verifica se é true ou false
  if (validateCategory) {
    const newPost = await BlogPosts.create({ userId: 1, title, content });
    return newPost;
  }
  return null;
};

const findAllPosts = async () => {
  const allPosts = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return allPosts;
};

const findPostById = async (id) => {
  if (findAllPosts) {
    const post = await BlogPosts.findOne({
      where: { id: Number(id) },
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
    });
    return post;
  }
  return null;
};

module.exports = {
  createPost,
  findAllPosts,
  findPostById,
};
