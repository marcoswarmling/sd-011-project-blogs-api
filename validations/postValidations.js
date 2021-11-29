const error = require('../utils/errors');

const validateField = (field, errorMessage) => {
  if (!field || field.length === 0) throw errorMessage;
};

const newPost = ({ title, content, categoryIds }) => {
  validateField(title, error.titleIsRequired);
  validateField(content, error.contentIsRequired);
  validateField(categoryIds, error.categoryIsRequired);
};

const post = (payload) => validateField(payload, error.postDoesNotExist);

const editPost = (payload) => {
  Object.keys(payload).forEach((key) => {
    if (key === 'categoryIds') throw error.categoriesCannotBeEdited;
  });

  const { title, content } = payload;
  validateField(title, error.titleIsRequired);
  validateField(content, error.contentIsRequired);
};

const userIsOwner = (userPost, userId) => {
  if (!userPost) throw error.postDoesNotExist;
  if (userPost.id !== userId) throw error.unauthorizedUser;
};

module.exports = {
  newPost,
  post,
  editPost,
  userIsOwner,
};