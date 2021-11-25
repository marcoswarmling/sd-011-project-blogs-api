require('dotenv').config();

const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const loginUserVerify = async ({ email, password }) => {
  const result = await User.findOne({ where: { email, password } });
  return result;
};

const generatedToken = async (user) => {
  const login = await loginUserVerify(user);

  if (!login) {
    return {
      message: 'Invalid fields',
    };
  }
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(login.dataValues, secret, jwtConfig);
  return token;
}; 

module.exports = { generatedToken };