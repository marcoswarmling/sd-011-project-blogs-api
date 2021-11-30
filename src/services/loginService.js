const { createError } = require('../middlewares/errors');
const { Users } = require('../models');
const { createToken } = require('../validations/token');
const { validateCredentials } = require('../validations/validations');

const loginUser = async (data) => {
  const { error: validationError } = validateCredentials(data);
  if (validationError) return createError('badRequest', validationError.message);

  const { email, password } = data;

  const user = await Users.findOne({
    where: { email, password },
  });

  if (!user) return createError('badRequest', 'Invalid fields');
  const token = createToken(email, user.id);
  return token;
};

module.exports = {
  loginUser,
};
