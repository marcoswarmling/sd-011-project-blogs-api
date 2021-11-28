const error = require('../utils/errors');

const validateField = (field, errorMessage) => {
  if (!field || field.length === 0) throw errorMessage;
};

const newPost = ({ title, content, categoryIds }) => {
  validateField(title, error.titleIsRequired);
  validateField(content, error.contentIsRequired);
  validateField(categoryIds, error.categoryIsRequired);
};

module.exports = {
  newPost,
};