const { BlogPost, PostsCategories, Categories, User } = require('../models');

const create = async (title, content, categoryIds, userId) => {
  const response = await BlogPost.create({
    title,
    content,
    categoryIds,
    userId,
  });

  categoryIds.forEach(async (id) => {
    await PostsCategories.create({ postId: response.id, categoryId: id });
  });
  return response;
};

const getAll = async () => {
  const posts = await BlogPost.findAll();
  const postCat = await PostsCategories.findAll(); 
  const categories = await Categories.findAll();

  const data = posts.map(async (post) => {
    const user = await User.findOne({ where: { id: post.userId } });

    const removePass = Object.entries(user.dataValues).filter(
      (el) => el[0] !== 'password',
    );
  
    const formatedUser = Object.fromEntries(removePass);

    const postcategories = categories.filter(
      ({ id }) => postCat.some(({ postId }) => id === postId),
);
    const categoriesName = categories.filter(({ id }) => postcategories.some((p) => p.id === id));

    return { ...post.dataValues, user: formatedUser, categories: categoriesName };
  });

  return data;
};

module.exports = { create, getAll };