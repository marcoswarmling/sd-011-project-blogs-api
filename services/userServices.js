const createAuthentication = require('../middlewares/auth/auth');
const { Users } = require('../models/index');

const getAllUsers = async () => {
  const users = await Users.findAll();
  return users;
};

const getByIdUser = async (id) => {
  const userId = await Users.findByPk(id);
  return userId;
};

const createUser = async (displayName, email, password, image) => {
    const findEmailUser = await Users.findOne({ where: { email } });
    
    if (findEmailUser) return { error: 'Email_Exists' };

    const user = await Users.create({ displayName, email, password, image });

    const userWithoutPWD = {
      id: user.id,
      displayName,
      email,
    };

    const token = await createAuthentication(userWithoutPWD);
    return token;
};

module.exports = { createUser, getAllUsers, getByIdUser };