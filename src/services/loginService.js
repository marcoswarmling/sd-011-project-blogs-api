const { createError } = require('../middlewares/errors');
const { User } = require('../models');
const { createToken } = require('../validations/token');
const { validateCredentials } = require('../validations/validations');

const loginUser = async (data) => {
  const { error: validationError } = validateCredentials(data);
  if (validationError) return createError('badRequest', validationError.message);

  const { email, password } = data;

  const user = await User.findOne({
    where: { email, password },
  });

  if (!user) return createError('badRequest', 'Invalid fields');
  const token = createToken(email);
  return token;
};

module.exports = {
  loginUser,
};
