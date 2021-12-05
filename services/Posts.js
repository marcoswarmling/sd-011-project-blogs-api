const { BlogPosts } = require('../models');
const categoriesServices = require('./Categories');

// const serverError = 'Something went wrong';

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
    console.log(data);
    const { id, userId, title, content } = response;
    return { id, userId, title, content };
  } catch (e) {
    return { error: e };
  }
};

module.exports = {
  create,
};