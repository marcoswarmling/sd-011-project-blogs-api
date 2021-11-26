const { createUserFields, loginUserFields } = require('./user');
const { categoryFields } = require('./categoryMiddleware');

module.exports = {
  createUserFields,
  loginUserFields,
  categoryFields,
};