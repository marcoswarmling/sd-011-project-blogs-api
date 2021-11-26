const { BlogPost, PostsCategorie, Categorie, User } = require('../models');

const create = async (title, content, categoryIds, userId) => {
  const response = await BlogPost.create({
    title,
    content,
    categoryIds,
    userId,
  });

  categoryIds.forEach(async (id) => {
    await PostsCategorie.create({ postId: response.id, categoryId: id });
  });

  return response;
};

const getAll = async () => {
  const posts = await BlogPost.findAll();
  const postCategories = await PostsCategorie.findAll();
  const categories = await Categorie.findAll();

  const response = posts.map(async (post) => {
    const user = await User.findOne({ where: { id: post.userId } });

    const removePassword = Object.entries(user.dataValues).filter(
      (element) => element[0] !== 'password',
    );

    const formatedUser = Object.fromEntries(removePassword);

    const postcategories = categories.filter(
      ({ id }) => postCategories.some(({ postId }) => id === postId),
    );

    const categoriesName = categories.filter(({ id }) => postcategories.some((p) => p.id === id));

    return { ...post.dataValues, user: formatedUser, categories: categoriesName };
  });

  return response;
};

module.exports = {
  create,
  getAll,
};
