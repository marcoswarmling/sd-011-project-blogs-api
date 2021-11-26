// const Sequelize = require('sequelize');
// const { BlogPost } = require('../models');
// const config = require('../config/config');

const {
  verifyTitle,
  verifyContent,
  verifyCategoryIds,
} = require('../validations/post');

// const sequelize = new Sequelize(config.development);

const createPost = async (id, title, content, categoryIds) => {
  const isValidTitle = verifyTitle(title);
  const isValidContent = verifyContent(content);
  const isValidCategoryIds = verifyCategoryIds(categoryIds);

  if (isValidTitle) return isValidTitle;
  if (isValidContent) return isValidContent;
  if (isValidCategoryIds) return isValidCategoryIds;

  // const result = await sequelize.transaction(async (t) => {
  //   const newPost = await BlogPost({
  //     userId: id, title, content,
  //   }, { transaction: t });
    
  //   await BlogPost({
  //     userId: id, title, content,
  //   }, { transaction: t });
  // });

  return { id, title, content, categoryIds };
};

module.exports = {
  createPost,
};