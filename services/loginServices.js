const jwt = require('jsonwebtoken');
const { Users } = require('../models/index');

const { secret, jwtConfig } = require('../utils/configToken');
const { BAD_REQUEST, STATUS_OK } = require('../utils/statusMessage');

const signIn = async (email, password) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) return { status: BAD_REQUEST, message: { message: 'Invalid fields' } };

  if (password !== user.password) {
    return {
      status: BAD_REQUEST,
      message: { message: 'Invalid fields' },
    };
  }
  const userWithoutPwd = {
    id: user.id,
    email,
  };

  const token = jwt.sign({ data: userWithoutPwd }, secret, jwtConfig);
  return { status: STATUS_OK, message: { token } };
};

module.exports = {
  signIn,
};