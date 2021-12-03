const categoriesService = require('./categoriesService');
const { BlogPosts, Categories, Users } = require('../models');

const createPost = async (title, content, categoryIds) => {
  const verifyCategories = await categoriesService.getById(categoryIds);
  
  if (verifyCategories) {
    const createPostDB = await BlogPosts.create(title, content, categoryIds);
  
    return createPostDB;
  }
};

const categoriesAndUsers = [
  { model: Users, as: 'user', attributes: { exclude: ['password'] } },
  { model: Categories,
    as: 'categories',
    through: { attributes: [] }, 
    attributes: { exclude: ['PostsCategories'] },
  },
];

const getAll = async () => {
  const listPosts = await BlogPosts.findAll({ include: categoriesAndUsers });
  
  return listPosts;
};

const getById = async (id) => {
  const response = await BlogPosts.findOne({
    where: { id },
    include: categoriesAndUsers,
  });

  return response;
};

module.exports = { 
  createPost,
  getAll,
  getById,
};