const { Users } = require('../models');
const jwt = require('../auth/jwt');

const userLogin = async (email) => {
  const user = await Users.findOne({ where: { email } });
  // console.log(user);
  const { id } = user;
  const jwtToken = jwt.createJWT(id, email);
  return jwtToken;
};

module.exports = { userLogin };