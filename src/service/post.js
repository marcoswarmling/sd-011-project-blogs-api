const Sequelize = require('sequelize');
const { BlogPost, PostsCategory, User, Category } = require('../models');
const config = require('../config/config');

const {
  verifyTitle,
  verifyContent,
  verifyCategoryIds,
} = require('../validations/post');

const sequelize = new Sequelize(config.development);

const manageDataIntoBlogAndPostCategoryTable = async (userId, title, content, categoryIds) => {
  const t = await sequelize.transaction();
  console.log(userId);
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

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User.scope('withoutPassword'), as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return allPosts;
};

const getPostById = async (searchedId) => {
  const blogPost = await BlogPost.findByPk(searchedId, {
    include: [
      { model: User.scope('withoutPassword'), as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!blogPost) {
    return {
      err: {
        status: 404,
      },
      message: 'Post does not exist',
    };
  }

  return blogPost;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};