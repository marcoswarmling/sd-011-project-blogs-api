const { BlogPosts, Categories, User } = require('../models');

const isTitleValid = (title) => {
  if (!title) {
    return ({ message: '"title" is required' });
  }
  return null;
};

const isContentValid = (content) => {
  if (!content) {
    return ({ message: '"content" is required' });
  }
  return null;
};

const isCategoryValid = (categoryIds) => {
  if (!categoryIds) {
    return ({ message: '"categoryIds" is required' });
  }
  return null;
};

const isCategoryFound = async (categoryIds) => {
  const categories = await Categories.findAll({
    where: {
      id: categoryIds,
    },
  });
  if (categories.length === 0) {
    return ({ message: '"categoryIds" not found' });
  }
  return null;
};

const isPostValid = async (title, content, categoryIds) => {
  if (isTitleValid(title)) return isTitleValid(title);
  if (isContentValid(content)) return isContentValid(content);
  if (isCategoryValid(categoryIds)) return isCategoryValid(categoryIds);
  if (await isCategoryFound(categoryIds)) return isCategoryFound(categoryIds);
  return null;
};

const create = async ({ title, userId, content, categoryIds }) => {
  const postNotValid = await isPostValid(title, content, categoryIds);
  if (postNotValid) {
    return postNotValid;
  }
  const newCategory = await BlogPosts.create({ title, userId, content, categoryIds });

  return newCategory;
};

const getAll = async () => {
  const posts = await BlogPosts.findAll({
    include: [
      {
        model: User,
        as: 'user',
      },
      {
        model: Categories,
        as: 'categories',
      },
  ],
  });
  return posts;
};

module.exports = {
  create,
  getAll,
};