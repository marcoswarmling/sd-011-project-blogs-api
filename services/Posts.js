const { BlogPosts, Users, Categories } = require('../models');
const categoriesServices = require('./Categories');

const serverError = 'Something went wrong';

const someCategoryNotExist = (categories) => categories.some((category) => !category);

const categoryNotFoundMessage = { message: '"categoryIds" not found' };
const includeUserAndCategoriesInformations = [
  { model: Users, as: 'user', attributes: { exclude: ['password'] } },
  { model: Categories,
    as: 'categories',
    through: { attributes: [] }, 
    attributes: { exclude: ['PostsCategories'] },
  },
];

const create = async (postData) => {
  try {
    const { categoryIds } = postData;

    if (categoryIds.length === 0) {
      return categoryNotFoundMessage;
    }

    const searchResultCategories = await Promise
    .all(categoryIds.map(async (id) => categoriesServices.getById(id)));

    if (someCategoryNotExist(searchResultCategories)) {
      return categoryNotFoundMessage;
    }

    const response = await BlogPosts.create(postData);
    const { id, userId, title, content } = response;

    return { id, userId, title, content };
  } catch (e) {
    return { error: serverError };
  }
};

const getAll = async () => {
  try {
    const response = await BlogPosts.findAll({ 
      include: includeUserAndCategoriesInformations,
    });

    return response;
  } catch (e) {
    return { error: serverError };
  }
};

const getById = async (id) => {
  try {
    const response = await BlogPosts.findOne({
      where: { id },
      include: includeUserAndCategoriesInformations,
    });
    if (!response) {
      return { message: 'Post does not exist' };
    }
    return response;
  } catch (e) {
    return { error: serverError };
  }
};

module.exports = {
  create,
  getAll,
  getById,
};