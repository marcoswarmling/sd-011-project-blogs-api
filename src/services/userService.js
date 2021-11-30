const { createError } = require('../middlewares/errors');
const { createToken } = require('../validations/token');
const { Users } = require('../models');
const { validateUser } = require('../validations/validations');

const addUser = async (data) => {
  const { error: validationError } = validateUser(data);

  if (validationError) return createError('badRequest', validationError.message);

  const { displayName, email, password, image } = data;

  const user = await Users.findOne({ where: { email } });
  
  if (!user) {
    await Users.create({ email, password, displayName, image });
    const token = createToken(email);
    return token;
  }

  return createError('conflict', 'User already registered');
};

const getAllUsers = async () => {
  const user = await Users.findAll();

  return user;
};

const getUserById = async (id) => {
  const user = await Users.findByPk(id);

  if (!user) return createError('notFound', 'User does not exist');

  return user;
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
};
