const { Users } = require('../models');

const createNewUser = async (body) => {
  const { email } = body;
  const user = await Users.findOne({ where: { email } });

  if (user) return { message: 'User already registered' };
  
  return body;
};

const loginUser = async ({ email, password }) => {
  const user = await Users.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return ({ message: 'Invalid fields' }); 
  }

  if (user.password !== password) {
    return ({ message: 'Invalid fields' }); 
  }

  return user;
};

module.exports = {
  createNewUser,
  loginUser,
};