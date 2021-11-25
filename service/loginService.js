const { User } = require('../models');
const { createNewToken } = require('../auth/createJWT');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { statusCode: 400, response: { message: 'Invalid fields' } };
  }

  const token = await createNewToken(email);

  return { statusCode: 200, response: { token } };
 };

 module.exports = {
  login,
};