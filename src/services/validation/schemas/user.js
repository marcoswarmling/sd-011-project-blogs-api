const { getRequiredFieldMessage, getMinimumLengthMessage } = require('../errorMessages');

const create = {
  type: 'object',
  properties: {
    displayName: { type: 'string', minLength: 8, maxLength: 100 },
    email: { type: 'string', minLength: 3, maxLength: 100, pattern: '.+@.+' },
    password: { type: 'string', minLength: 6, maxLength: 256 },
    image: { type: 'string', minLength: 3, maxLength: 512 },
  },
  required: ['displayName', 'email', 'password'],
  errorMessage: {
    required: {
      displayName: getRequiredFieldMessage('displayName'),
      email: getRequiredFieldMessage('email'),      
      password: getRequiredFieldMessage('password'),
    },
    properties: {
      email: '"email" must be a valid email',
      displayName: '"displayName" length must be at least 8 characters long',
      password: getMinimumLengthMessage('password', 6),
    },
  },
};

const login = {
  type: 'object',
  properties: {
    email: { type: 'string', minLength: 3, maxLength: 100, pattern: '.+@.+' },
    password: { type: 'string', minLength: 6, maxLength: 256 },
  },
  required: ['email', 'password'],
  errorMessage: 'Invalid fields',
};

module.exports = {
  create,
  login,
};
