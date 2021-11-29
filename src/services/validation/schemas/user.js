const { getRequiredFieldMessage } = require('../errorMessages');

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
    },
  },
};

module.exports = {
  create,
};
