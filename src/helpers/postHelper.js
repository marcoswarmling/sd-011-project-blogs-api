const errors = require('../schemas/errorsSchema');

const expectedFields = ['title', 'categoryIds', 'content'];

const validatePost = (post) => {
  expectedFields.forEach((field) => {
    if (!post[field]) throw errors.requiredField(field);
  });
};

module.exports = { validatePost };
