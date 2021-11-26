const { User } = require('../models');

const { createJwtToken } = require('../auth/createToken');

const createUser = async (displayName, email, password, image) => {
  try {
    const userCreated = await User.create({
      displayName, email, password, image,
    });
    return { code: 201, result: userCreated };
  } catch (error) {
    return ({ code: 500, result: { message: 'Internal Error Server' } });
  }
};

const findUserByEmail = async (email) => {
  try {
    const [userByEmail] = await User.findAll({ where: { email } });
    return userByEmail;
  } catch (error) {
    return ({ code: 500, result: { message: 'Internal Error Server' } });
  }
};

const connectUser = async (email, password) => {
  const result = createJwtToken(email, password);
  return result;
};

module.exports = {
  createUser,
  findUserByEmail,
  connectUser,
};