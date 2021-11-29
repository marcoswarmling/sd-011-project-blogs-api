const create = {
  type: 'object',
  properties: {
    displayName: { type: 'string', minLength: 3, maxLength: 100 },
    email: { type: 'string', minLength: 3, maxLength: 100, pattern: '.+@.+' },
    password: { type: 'string', minLength: 3, maxLength: 256 },
    image: { type: 'string', minLength: 3, maxLength: 512 },
  },
  required: ['displayName', 'email', 'password', 'image'],
};

module.exports = {
  create,
};
