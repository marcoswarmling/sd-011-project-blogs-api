const { createError } = require('../middlewares/errors');
const { createToken } = require('../validations/token');
const { User } = require('../models');
const { validateUser } = require('../validations/validations');

const addUser = async (data) => {
  const { error: validationError } = validateUser(data);

  if (validationError) return createError('badRequest', validationError.message);

  const { displayName, email, password, image } = data;

  const user = await User.findOne({ where: { email } });
  
  if (!user) {
    await User.create({ email, password, displayName, image });
    const token = createToken(email);
    return token;
  }

  return createError('conflict', 'User already registered');
};

const getAllUsers = async () => {
  const user = await User.findAll();

  return user;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);

  if (!user) return createError('notFound', 'User does not exist');

  return user;
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
};
