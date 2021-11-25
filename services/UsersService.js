const UserModel = require('../models');

const create = async () => {
  const createUser = await UserModel.create();
  return createUser;
};

module.exports = {
  create,
};