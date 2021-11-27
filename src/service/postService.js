const { Post, Category } = require('../../models');

const verifyCategoryExist = async (categoryIds) => {
  const getAllCategory = await Category.findAll();

  const result = await getAllCategory.some((value) => categoryIds.includes(value.dataValues.id));
  return result;
};

const createdPost = async ({ title, content, categoryIds }, userId) => {
 const validCategory = await verifyCategoryExist(categoryIds);

  if (!validCategory) {
    return {
      message: '"categoryIds" not found',
    };
  }

  const result = await Post.create({ title, content, userId: userId.id });
  return result;
};

module.exports = {
  createdPost,
};