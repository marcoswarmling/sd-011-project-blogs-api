const { Post, Categorie } = require('../../models');

const postRegister = async (title, categoryIds, content, userId) => {
  const findCategories = Categorie.findAll();
  const verify = findCategories.some((value) => categoryIds.includes(value.dataValues.id));

  if (!verify) {
    return ({ message: '"categoryId" not found' });
  }

  const newPost = await Post.create({ userId, title, content });
  return newPost;
};

module.exports = {
  postRegister,
};
