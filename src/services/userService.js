const { User } = require('../models');

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

module.exports = {
  createUser,
};