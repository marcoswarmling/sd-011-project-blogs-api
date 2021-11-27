const Sequelize = require('sequelize');
const { BlogPost, PostsCategory } = require('../models');
const config = require('../config/config');

const {
  verifyTitle,
  verifyContent,
  verifyCategoryIds,
} = require('../validations/post');

const sequelize = new Sequelize(config.development);

const manageDataIntoBlogAndPostCategoryTable = async (userId, title, content, categoryIds) => {
  const t = await sequelize.transaction();
  try {
    const newPost = await BlogPost.create({ userId, title, content },
    { transaction: t });
    const categories = [];
    categoryIds.map((id) => categories.push({
      postId: newPost.id, categoryId: Number(id),
    }));
    await PostsCategory.bulkCreate(categories, { transaction: t });
    await t.commit();
    return { id: newPost.id, userId, title, content };
  } catch (e) {
    await t.rollback();
    console.log(e.message);
  }
};

const createPost = async (userId, title, content, categoryIds) => {
  const isValidTitle = verifyTitle(title);
  const isValidContent = verifyContent(content);

  const isValidCategoryIds = await verifyCategoryIds(categoryIds);
  if (isValidCategoryIds) return isValidCategoryIds;

  if (isValidTitle) return isValidTitle;
  if (isValidContent) return isValidContent;

  return manageDataIntoBlogAndPostCategoryTable(userId, title, content, categoryIds);
};

module.exports = {
  createPost,
};