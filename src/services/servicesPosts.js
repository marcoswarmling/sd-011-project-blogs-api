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

const findCategories = async (categories) => {
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
  const post = await BlogPost.findOne({
    where: { id },
    include: [{ all: true }],
  });

  if (!post) {
    return { message: 'Post does not exist' };
  }
  return post;
};

const findPostById = async (id, userId) => {
  const verifyUser = await BlogPost.findOne({ where: { id, userId } });
  if (!verifyUser) return { message: 'Unauthorized user' };
  return true;
};

const updateById = async (id, items) => {
  const updatePosts = await BlogPost.update(items, { where: { id } });

  if (!updatePosts) {
    return { message: 'Post does not exist' };
  }

  const post = await BlogPost.findOne({
    where: { id },
    include: [{ all: true }],
  });

  const { user, id: postId, published, updated, ...postAttr } = post.dataValues;
  return postAttr;
};

const deleteById = async (id) => {
  const deletePosts = await BlogPost.destroy({ where: { id } });

  if (deletePosts !== 1) {
    return { message: 'Post does not exist' };
  }

  return deletePosts;
};

const searchByQuery = async (q) => {
  const post = await BlogPost.findAll({
    include: [{ all: true }],
  });
  return post
    .filter(({ dataValues: { title, content } }) => title.includes(q) || content.includes(q));
};

module.exports = {
  createPost,
  findCategories,
  allPosts,
  findById,
  findPostById,
  updateById,
  deleteById,
  searchByQuery,
};
