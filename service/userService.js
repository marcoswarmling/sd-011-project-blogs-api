const { User } = require('../models');

const create = async (displayName, email, image) => {
  const result = await User.create({ displayName, email, image });
  
  return result;
};

const getAll = async () => User.findAll();

const getAllId = async (id) => User.findByPk(id);

module.exports = { create, getAll, getAllId };