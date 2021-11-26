const errors = require('../schemas/errorsSchema');

const attributes = {
  new: ['title', 'categoryIds', 'content'],
};

const validateNewPostAttributes = (post) => {
  attributes.new.forEach((field) => {
    if (!post[field]) throw errors.requiredField(field);
  });
};

module.exports = { validateNewPostAttributes };
