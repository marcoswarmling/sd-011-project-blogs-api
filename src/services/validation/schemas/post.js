const { getRequiredFieldMessage } = require('../errorMessages');

const create = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 8, maxLength: 100 },
    content: { type: 'string', minLength: 3, maxLength: 100 },
    categoryIds: { type: 'array', items: { type: 'number', minimum: 1 } },
  },
  required: ['title', 'content', 'categoryIds'],
  errorMessage: {
    required: {
      title: getRequiredFieldMessage('title'),
      content: getRequiredFieldMessage('content'),      
      categoryIds: getRequiredFieldMessage('categoryIds'),
    },
  },
};

module.exports = {
  create,
};
