const { BlogPost } = require('../models');
const { isValidUser } = require('../utils/validations');

const postRegister = (post, userEmail) => {
  const { title, content, categoryIds } = post;

  const result = await isValidUser(userEmail);
  if (!result.error) return BlogPost.create({ title, content, categoryIds });
  return result;
};

module.exports = {
  postRegister,
};
