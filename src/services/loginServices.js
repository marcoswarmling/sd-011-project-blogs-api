// const { createToken } = require('../auth/createJWT');
// const validateJWT = require('../auth/validateJWT');

const { User } = require('../models');

const login = async (email, password) => {
  const userLogin = await User.findOne({ where: { email, password } });
  
  return userLogin;
};

module.exports = {
  login,
};
