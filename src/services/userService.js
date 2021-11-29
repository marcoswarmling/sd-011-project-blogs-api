const { User } = require('../../models');
// const {} = require('../helpers/user');

// eslint-disable-next-line complexity
const createUser = async ({ displayName, email, password, image }) => User.create(
  { displayName, email, password, image },
  );

module.exports = {
  createUser,
};