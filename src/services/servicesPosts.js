const Sequelize = require('sequelize');
const { BlogPost, PostsCategory, User, Categorie } = require('../../models');
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
      console.log(newCat);
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
    include: [{
      model: User, as: 'users', attributes: { exclude: ['password'] },
    }, {
      model: PostsCategory, as: 'postsCategories',
    }, {
      model: Categorie, as: 'categories',
    }],
  });

  return allBlogPosts;
};

module.exports = {
  createPost,
  findcategories,
  allPosts,
};
