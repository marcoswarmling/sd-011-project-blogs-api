const loginValidate = require('../helpers/loginValidate');
const newUserValidate = require('../helpers/newUserValidate');
const { User } = require('../models');

const create = async (object) => {
  const validation = await newUserValidate(object);
  
  if (validation) return validation;
  
  const { dataValues } = await User.create(object);

  return { code: 201, user: dataValues }; 
};

const login = async (object) => {
  const validation = await loginValidate(object);
  
  if (validation) return validation;
  
  const user = await User.findOne({ where: object });

  if (!user) return { code: 400, message: 'Invalid fields' };

  return { code: 200, user: user.dataValues }; 
};

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);

  if (user) return { code: 200, user: user.dataValues };

  return { code: 404, message: 'User does not exist' };
};

module.exports = {
  create,
  login,
  getAll,
  getById,
};