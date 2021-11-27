const { BlogPost, PostsCategory } = require('../../models');
const servicesCategory = require('./category');
require('dotenv').config();

const createPost = async (items) => {
  try {
    const { categoryIds, ...item } = items;
    const newPost = await BlogPost.create(item);

    const createPostsCategory = await categoryIds.map(async (id) => {
      const newCategory = await PostsCategory.create({ 
        categoryId: id, postId: newPost.dataValues.id, 
      });
      return newCategory;
    });
    await Promise.all(createPostsCategory);

    return newPost;
  } catch (error) {
    return error.message;
  }
};

const findCategoriesById = async (categories) => {
  const allCategories = await servicesCategory.getAllCategories();
  const validCategories = allCategories.map(({ dataValues }) => dataValues.id);

  if (categories.some((el) => !validCategories.includes(el))) {
    return { message: '"categoryIds" not found' };
  }
  return false;
};

const getAllPosts = async () => {
  const allBlogPosts = await BlogPost.findAll({
    include: [{ all: true }],
  });

  return allBlogPosts;
};

module.exports = {
  createPost,
  findCategoriesById,
  getAllPosts,
};