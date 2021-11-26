const jwt = require('jsonwebtoken');
const { Users } = require('../../models');

const secret = 'meusecret123';

const login = async (email, password) => {
  const user = await Users.findOne({ where: { email } });
  const { id, displayName, email: emailUser } = user.dataValues;
  console.log(user.dataValues);
  if (!user) return { message: 'Invalid fields' };
  if (user.password !== password) return { message: 'Invalid fields' };

  const token = jwt.sign({ id, displayName, emailUser }, secret);
  return token;
};

module.exports = { login };