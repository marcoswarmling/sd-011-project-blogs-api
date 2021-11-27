const { BlogPost } = require('../models');
const { isValidUser, isValidCategory } = require('../utils/validations');

const postRegister = async (post, userEmail) => {
  const { title, content, categoryIds } = post;

  const validCategoryOne = await isValidCategory(categoryIds[0]);
  const validCategoryTwo = await isValidCategory(categoryIds[1]);

  if (!validCategoryOne && !validCategoryTwo) {
    const result = await isValidUser(userEmail);
    if (!result.error) return BlogPost.create({ title, content, categoryIds });
    return result;
  } return ({ validCategoryOne, validCategoryTwo });
};

module.exports = {
  postRegister,
};
