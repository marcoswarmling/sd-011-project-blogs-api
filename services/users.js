const { generateToken } = require('../Helpers/jwt');
const { User } = require('../models');
const { status, usersMessages } = require('../Helpers/status&messages');

const createNewUser = async (displayName, email, password, image) => {
    const user = await User.findOne({ where: { email } });
    if (user !== null) {
      return { status: status.conflict, message: usersMessages.emailConflict };
    }
    await User.create({ displayName, email, password, image });
    const token = generateToken(email);
    return token;
};

const findAllUsers = async () => User.findAll();

module.exports = { createNewUser, findAllUsers };
