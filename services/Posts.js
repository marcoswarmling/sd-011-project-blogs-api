const { BlogPosts, Users, Categories, PostsCategories } = require('../models');
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

const includeCategoriesInformations = [
  { model: Categories,
    as: 'categories',
    through: { attributes: [] }, 
    attributes: { exclude: ['PostsCategories'] },
  },
];

const createaPostCategoryAssociation = async (postId, categoryId) => {
  try {
    const response = await PostsCategories.create({ postId, categoryId });
    return response;
  } catch (e) {
    return { error: serverError };
  }
};

const create = async (postData) => {
  try {
    const { categories } = postData;

    if (categories.length === 0) {
      return categoryNotFoundMessage;
    }

    const searchResultCategories = await Promise
    .all(categories.map(async (id) => categoriesServices.getById(id)));

    if (someCategoryNotExist(searchResultCategories)) {
      return categoryNotFoundMessage;
    }
  
    const response = await BlogPosts.create(postData);
    const { id, userId, title, content } = response;

    await Promise
    .all(categories.map(async (categoryId) => createaPostCategoryAssociation(id, categoryId)));

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

const updateById = async (postData) => {
  const { id, title, content, userId } = postData;
  try {
    const currentPost = await BlogPosts.findOne({ 
      where: { id }, 
      include: includeCategoriesInformations,
    });
    if (!currentPost || currentPost.userId !== userId) {
      return { message: 'Unauthorized user' };
    }

    await BlogPosts.update({ title, content }, { where: { id } });
    const { categories } = currentPost;
    return { title, content, userId, categories };
  } catch (e) {
    return { error: serverError };
  }
};

const deleteById = async (postData) => {
  const { id, userId } = postData;
  try {
    const postToDelete = await BlogPosts.findOne({ 
      where: { id },
    });
    if (!postToDelete) {
      return { message: 'Post does not exist' };
    }

    if (postToDelete.userId !== userId) {
      return { message: 'Unauthorized user' };
    }
    const response = await BlogPosts.destroy({ where: { id } });
    return response;
  } catch (e) {
    return { error: serverError };
  }
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};