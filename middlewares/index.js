const { createUserFields, loginUserFields } = require('./user');
const { categoryFields } = require('./categoryMiddleware');
const { postFields } = require('./postMiddleware');

module.exports = {
  createUserFields,
  loginUserFields,
  categoryFields,
  postFields,
};