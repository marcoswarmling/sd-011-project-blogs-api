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
    }],
  });
  
  const promisseCategories = allBlogPosts.map(async ({ dataValues }) => {
    const cat = await PostsCategory.findAll({ where: { postId: dataValues.id } });
    return Promise.all(cat.map(async ({ dataValues: data }) => Categorie
      .findOne({ where: { id: data.categoryId } })));
  });
  
  const allPostsCategory = await Promise.all(promisseCategories);

  const newArr = allPostsCategory.map((el) => el.map(({ dataValues: i }) => i));
  const result = allBlogPosts.map((el, i) => {
    const { dataValues: { users: user, ...allData } } = el;
    return { ...allData, user, categories: newArr[i] };
  });
  return result;
};

module.exports = {
  createPost,
  findcategories,
  allPosts,
};
