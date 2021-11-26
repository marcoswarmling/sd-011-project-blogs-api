const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { status, usersMessages } = require('../Helpers/status&messages');

const JWT = 'secret';

const createNewUser = async (displayName, email, password, image) => {
    const user = await User.findOne({ where: { email } });
    if (user !== null) {
      return { status: status.conflict, message: usersMessages.emailConflict };
    }
    await User.create({ displayName, email, password, image });
    const token = jwt.sign({ email }, JWT);
    return token;
};

module.exports = { createNewUser };
