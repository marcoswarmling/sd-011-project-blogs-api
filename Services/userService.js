const { Users } = require('../models');
const { newToken } = require('../Middlewares/token');

const searchMail = async (email) => {
  try {
    const search = await Users.findOne({ where: { email } });
    return search;
  } catch (error) {
    return { message: 'algo deu errado' };
  }
};

const createUser = async (user) => {
  const { email } = user;
  const mail = await searchMail(email);
  if (mail) return 'exist';
  const { password, ...userData } = await Users.create(user);
  return newToken(userData);
};

const userLogin = async (user) => {
  try {
    const { email } = user;
    const emailFound = await searchMail(email);
    if (emailFound === null) return null;
    return newToken(user);
  } catch (error) {
    return { message: 'algo deu errado' };
  }
};

const getUsers = async () => {
  try {
    const users = await Users.findAll();
    return users;
  } catch (error) {
    return { message: 'algo deu errado' };
  }
};

const getUserByID = async (id) => {
  try {
    const user = await Users.findByPk(id);
    if (!user) return undefined;
    const { password, ...dataUser } = user.dataValues;
    return dataUser;
  } catch (error) {
    return { message: 'algo deu errado' };
  }
};

module.exports = {
  createUser,
  userLogin,
  getUsers,
  getUserByID,
};