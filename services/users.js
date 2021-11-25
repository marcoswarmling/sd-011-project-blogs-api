const createError = require('http-errors');
const { status, usersMessages } = require('../Helpers/status&messages');

const { validateUser } = require('../Helpers/validateUser');
const { User } = require('../models/users');

const create = async (displayName, email, password, image) => {
  try {
    // validação de body
    validateUser(displayName, email, password);

    // validação do displayName
    const checkUser = await User.findOne({ where: { email } });
    if (checkUser !== null) throw createError(status.conflict, usersMessages.emailConflict);
    
    const newUser = await User.create(displayName, email, password, image);
    return newUser;
  } catch (error) {
    return { status: error.status, message: error.message };
  }
};

module.exports = { create };
