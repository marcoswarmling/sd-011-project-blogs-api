const { getRequiredFieldMessage } = require('../errorMessages');

const create = {
  type: 'object',
  properties: {
    name: { type: 'string', maxLength: 100 },
  },
  required: ['name'],
  errorMessage: {
    required: {
      name: getRequiredFieldMessage('name'),
    },
  },
  additionalProperties: false,
};

module.exports = {
  create,
};
