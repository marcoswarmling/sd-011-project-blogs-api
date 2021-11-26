const { createError } = require('../middlewares/errors');
const { createToken } = require('../middlewares/token');
const { User } = require('../models');
const { validateUser } = require('../validations/validateUser');

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

module.exports = {
  addUser,
};
