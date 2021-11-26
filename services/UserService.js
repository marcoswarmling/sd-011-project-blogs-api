const { User } = require('../models');

const createNewUser = async (displayName, email, password, image) => {
  try {
    const createUser = await User.create({ displayName, email, password, image });
    return createUser;    
  } catch (error) {
    return error.message;
  }   
};

module.exports = {
  createNewUser,
};
