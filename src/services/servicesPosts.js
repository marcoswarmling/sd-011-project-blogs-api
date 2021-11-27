const Sequelize = require('sequelize');
const { BlogPost, PostsCategory } = require('../../models');
const config = require('../../config/config');
const servicesCategories = require('./servicesCategories');
require('dotenv').config();

const errorMessage = 'Algo deu errado';

const sequelize = new Sequelize(config.development);

const createPost = async (items) => {
  const t = await sequelize.transaction();
  try {
    const { categoryIds, ...item } = items;
    const newPost = await BlogPost.create(item, { transaction: t });
    
    const promisseArr = await categoryIds.map(async (el) => {
      const newCat = await PostsCategory.create({ categoryId: el, postId: newPost.dataValues.id },
        { transaction: t });
      return newCat;
    });
    await Promise.all(promisseArr);

    t.commit();
    return newPost;
  } catch (error) {
    console.log(error);
    return { message: errorMessage };
  }
};

const findcategories = async (categories) => {
  const allCategories = await servicesCategories.allcategories();
  const validCategories = allCategories.map(({ dataValues }) => dataValues.id);
  
  if (categories.some((el) => !validCategories.includes(el))) {
    return { message: '"categoryIds" not found' };
  }
  return false;
};

const allPosts = async () => {
  const allBlogPosts = await BlogPost.findAll({
    include: [{ all: true }],
  });

  return allBlogPosts;
};

const findById = async (id) => {
  const arrAllPosts = await BlogPost.findOne({
    where: { id },
    include: [{ all: true }],
  });

  if (!arrAllPosts) {
    return { message: 'Post does not exist' };
  }
  return arrAllPosts;
};

module.exports = {
  createPost,
  findcategories,
  allPosts,
  findById,
};
