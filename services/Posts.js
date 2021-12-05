const { BlogPosts, Users, Categories } = require('../models');
const categoriesServices = require('./Categories');

const serverError = 'Something went wrong';

const CategoryNotExist = (categories) => categories.some((category) => !category);

const categoryNotFoundMessage = { message: '"categoryIds" not found' };

const dataValue = (postData) => ({
        userId: postData.userId,
        title: postData.title,
        content: postData.content,
        categoryIds: postData.categoryIds,
        published: new Date(),
        updated: new Date(),
    });

const create = async (postData) => {
  try {
    const { categoryIds } = postData;
    
    if (categoryIds.length === 0) {
      return categoryNotFoundMessage;
    }
    
    const searchResultCategories = await Promise
    .all(categoryIds.map(async (id) => categoriesServices.getById(id)));

    if (CategoryNotExist(searchResultCategories)) {
      return categoryNotFoundMessage;
    }
    const data = dataValue(postData);
    const response = await BlogPosts.create(data);
    const { id, userId, title, content } = response;
    return { id, userId, title, content };
  } catch (e) {
    return { error: serverError };
  }
};

const getAll = async () => {
  try {
    const response = await BlogPosts.findAll({ 
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { 
          model: Categories,
          as: 'categories',
          through: { attributes: [] }, 
          attributes: { exclude: ['PostsCategories'] },
        },
      ],
    });

    return response;
  } catch (e) {
    return { error: e.toString() };
  }
};

module.exports = {
  create,
  getAll,
};