const { BlogPost, Categorie } = require('../../models');

const postRegister = async (title, categoryIds, content, userId) => {
  const findCategories = await Categorie.findAll();
  const verify = await findCategories.some((value) => categoryIds.includes(value.dataValues.id));
  if (!verify) {
    return ({ message: '"categoryIds" not found' });
  }
  const newPost = await BlogPost.create({ userId, title, content });
  console.log(newPost)
  return newPost;
};

module.exports = {
  postRegister,
};
