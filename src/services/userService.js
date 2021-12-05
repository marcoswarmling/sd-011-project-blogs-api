const { Users } = require('../models');
const { createToken } = require('../api/auth/jwt');

const createUser = async (displayName, email, password, image) => {
  const token = createToken(email);
  const user = await Users.findOne({
    where: { email },
  });
  
  if (user) {
    return { message: 'User already registered' };
  }
  
  await Users.create({ displayName, email, password, image });
  return { token };
};

module.exports = {
  createUser,
};