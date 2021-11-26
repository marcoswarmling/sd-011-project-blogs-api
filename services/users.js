const createError = require('http-errors');
const { User } = require('../models');
const { status, usersMessages } = require('../Helpers/status&messages');
const { validateUser } = require('../Helpers/validateUser');

const createNewUser = async ({ displayName, email, password, image }) => {
  try {
    // validação de body
    validateUser(displayName, email, password);
    // validação do displayName
    const checkUser = await User.findOne({ where: { email } });
    console.log(checkUser);
    
    if (checkUser !== null) throw createError(status.conflict, usersMessages.emailConflict);
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
  } catch (error) {
    return { error: { status: error.status, message: error.message } };
  }
};

module.exports = { createNewUser };
