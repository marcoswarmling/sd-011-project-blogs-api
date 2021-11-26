const errors = require('../schemas/errorsSchema');

const attributes = {
  new: ['title', 'categoryIds', 'content'],
  update: ['title', 'content'],
};

const validateNewPostAttributes = (post) => {
  attributes.new.forEach((attribute) => {
    if (!post[attribute]) throw errors.requiredField(attribute);
  });
};

const validateUpdatePostAttributes = (post) => {
  attributes.update.forEach((attribute) => {
    if (!post[attribute]) throw errors.requiredField(attribute);
  });
};

module.exports = { validateNewPostAttributes, validateUpdatePostAttributes };
