const { BlogPost, Categorie, PostsCategory } = require('../models');

const verifyCategoriesId = async (categoryIds) => {
  const getAll = await Categorie.findAll();

  const res = await getAll.some((r) => categoryIds.includes(r.dataValues.id));

  return res;
};

const blogPostValidate = async ({ title, content, categoryIds }, userId) => {
  const validCtgId = await verifyCategoriesId(categoryIds);
  
  if (!validCtgId) return ({ message: '"categoryIds" not found' });
  
  const register = await BlogPost.create({ title, content, userId });
  
  const setPostCtg = await categoryIds.map(async (values) => {
    const newCtg = await PostsCategory.create(
      { categoryIds: values, postId: register.dataValues.id },
      );
      return newCtg;
  });

  await Promise.all(setPostCtg);

  return register;
};

const getAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [{ all: true }],
  });
  return result;
};

module.exports = {
  blogPostValidate,
  getAllPosts,
};  