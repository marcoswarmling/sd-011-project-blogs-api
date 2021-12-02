const jwt = require('jsonwebtoken');
const { Users } = require('../models/index');
const { secret, jwtConfig } = require('../utils/configToken');

const { CONFLICT, UserAlreadyRegistered, CREATED } = require('../utils/statusMessage');

const registerUser = async (displayName, email, password, image) => {
  const doesEmailExists = await Users.findOne({ where: { email } });

  if (doesEmailExists) return { status: CONFLICT, message: { message: UserAlreadyRegistered } };

  await Users.create({ displayName, email, password, image });

  const userWithoutPwd = {
    displayName,
    email,
  };
  const token = jwt.sign({ data: userWithoutPwd }, secret, jwtConfig);
  return { status: CREATED, message: { token } };
};

module.exports = {
  registerUser,
};
