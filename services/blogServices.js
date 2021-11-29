const { BlogPost, Categorie } = require('../models');

const verifyCategoriesId = async (categoryIds) => {
  const getAll = await Categorie.findAll();

  const res = await getAll.some((r) => categoryIds.includes(r.dataValues.id));

  return res;
};

const blogPostValidate = async ({ title, content, categoryIds }, userId) => {
  const validCtgId = await verifyCategoriesId(categoryIds);
  
  if (!validCtgId) return ({ message: '"categoryIds" not found' });
  
  const register = await BlogPost.create({ title, content, userId });
  console.log('aaaaaa');

  console.log(register);
  
  return register;
};

module.exports = {
  blogPostValidate,
};  