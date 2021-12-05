const { getRequiredFieldMessage } = require('../errorMessages');

const create = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 8, maxLength: 100 },
    content: { type: 'string', minLength: 3, maxLength: 100 },
    categoryIds: { type: 'array', items: { type: 'number', minimum: 1 } },
    userId: { type: 'number', minimum: 1 },
  },
  required: ['title', 'content', 'categoryIds', 'userId'],
  additionalProperties: false,
  errorMessage: {
    required: {
      title: getRequiredFieldMessage('title'),
      content: getRequiredFieldMessage('content'),      
      categoryIds: getRequiredFieldMessage('categoryIds'),
    },
  },
};

const edit = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 8, maxLength: 100 },
    content: { type: 'string', minLength: 3, maxLength: 100 },
    categoryIds: { type: 'array', maxItems: 0 },
  },
  required: ['title', 'content'],
  additionalProperties: false,
  errorMessage: {
    required: {
      title: getRequiredFieldMessage('title'),
      content: getRequiredFieldMessage('content'),
    },
    properties: {
      categoryIds: 'Categories cannot be edited',
    },
  },
};

module.exports = {
  create,
  edit,
};
