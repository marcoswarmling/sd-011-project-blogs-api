const { Users, Categories, BlogPosts } = require('../models/index');

// Requisito 8 - Tive ajuda do Mauricio.
const getAllBlogPosts = async () => {
  const blogpostsFindAll = await BlogPosts.findAll({
    include: [
      // relação do Users com BlogPosts é 1 para muitos
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      // relacão do Categories, tem o through(através)
      // pois tem a tabela intermediaria postsCategories
      // Para acessar o BlogPosts.
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return blogpostsFindAll;
};

const getByIdPostCategories = async (id) => {
  const postCategoriesId = await BlogPosts.findByPk(id, {
    include: [
      // relação do Users com BlogPosts é 1 para muitos
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      // relacão do Categories, tem o through(através)
      // pois tem a tabela intermediaria postsCategories
      // Para acessar o BlogPosts.
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!postCategoriesId) {
    return { error: 'BlogPOst_Not_Exixts' };
  }
  return postCategoriesId; 
};

const createBlogPosts = async (title, content, id) => {
  const blogpostsCreate = await BlogPosts.create({ userId: id, title, content });
  return blogpostsCreate;
};

const updateBlogPost = async ({ title, content, id, userId }) => {
  const currentPost = await BlogPosts.findOne({ where: { id } });
  if (!currentPost || currentPost.userId !== userId) {
    return { error: 'UserId_Not_Exists' };
  }
  console.log(`SERVICES ---> Title: ${title}, COntent: ${content}, UserId: ${id}`);
  const update = await BlogPosts.update({ title, content }, { where: { userId: id } });
  console.log(update);
  return update;
};

module.exports = {
  createBlogPosts,
  getAllBlogPosts,
  getByIdPostCategories,
  updateBlogPost };