const error = require('../utils/errorCreator');

const validateField = (field, errorMessage) => {
  if (!field || field.length === 0) throw error(errorMessage);
};

const newPost = ({ title, content, categoryIds }) => {
  validateField(title, 'titleIsRequired');
  validateField(content, 'contentIsRequired');
  validateField(categoryIds, 'categoryIsRequired');
};

const post = (payload) => validateField(payload, 'postDoesNotExist');

const editPost = (payload) => {
  Object.keys(payload).forEach((key) => {
    if (key === 'categoryIds') throw error('categoriesCannotBeEdited');
  });

  const { title, content } = payload;
  validateField(title, 'titleIsRequired');
  validateField(content, 'contentIsRequired');
};

const userIsOwner = (userPost, userId) => {
  if (!userPost) throw error('postDoesNotExist');
  if (userPost.id !== userId) throw error('unauthorizedUser');
};

module.exports = {
  newPost,
  post,
  editPost,
  userIsOwner,
};