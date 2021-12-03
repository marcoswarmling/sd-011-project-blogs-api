const { generateToken } = require('../Helpers/jwt');
const { User } = require('../models');
const { status, usersMessages } = require('../Helpers/status&messages');

const createNewUser = async (displayName, email, password, image) => {
  console.log('cheguei no service');
    const user = await User.findOne({ where: { email } });
    if (user !== null) {
      return { status: status.conflict, message: usersMessages.emailConflict };
    }
    console.log('service2');
    await User.create({ displayName, email, password, image });
    const token = generateToken(email);
    console.log('service3');
    return token;
};

const findAllUsers = async () => User.findAll();

const getUserById = async (id) => {
 const userById = await User.findByPk(id);
 if (!userById) {
   return { status: status.notFound, message: usersMessages.userDontExists };
 }
 return userById;
};

module.exports = { createNewUser, findAllUsers, getUserById };
