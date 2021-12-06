// const { User } = require('../models');
const jwt = require('../auth/jwt');

const userLogin = async (email) => {
  const jwtToken = jwt.createJWT(email);
  return jwtToken;
};

module.exports = { userLogin };