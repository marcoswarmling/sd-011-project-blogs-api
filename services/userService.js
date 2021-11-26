const jwt = require('jsonwebtoken');
const { User } = require('../models');
const validate = require('../validations/userValidations');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = ({ id, email }) => (
  jwt.sign({ id, email }, process.env.JWT_SECRET, jwtConfig)
);

const validateUser = async (payload) => {
  const { email } = payload;
  const user = await User.findOne({ where: { email } });
  validate.newUser(user);
};

const newUser = async (payload) => {
  await validateUser(payload);
  const user = await User.create(payload);
  return generateToken(user);
};

module.exports = {
  newUser,
};