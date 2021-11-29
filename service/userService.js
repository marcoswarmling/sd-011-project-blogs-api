const { User } = require('../models');

const create = async (displayName, email, password, image) => {
  const result = await User.create({ displayName, email, password, image });
  
  return result;
};

module.exports = { create };