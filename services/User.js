const { Users } = require('../models');

const createNewUser = async (body) => {
  const { email } = body;
  const user = await Users.findOne({ where: { email } });

  if (user) return { message: 'User already registered' };
  
  return body;
};

module.exports = {
  createNewUser,
};