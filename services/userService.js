require('dotenv').config();
const { jwt, jwtConfig } = require('../auth/validateJWT');
const { User } = require('../models');

const findOrCreate = async (displayName, email, password, image) => {
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { displayName, email, password, image },
  });

  if (!created) {
    throw new Error('userAlreadyRegistered');
  }

  const token = jwt.sign(
    { data: { displayName: user.displayName, email: user.email } },
    process.env.JWT_SECRET,
    jwtConfig,
  );

  return token;
};

const findUserByEmail = async (email) => User.findOne({ where: { email } });

const findOne = async (email) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error('invalidField');
  }

  const token = jwt.sign(
    { data: { displayName: user.displayName, email: user.email } },
    process.env.JWT_SECRET,
    jwtConfig,
  );

  return token;
};

const getAllUsers = async () => User.findAll({
  attributes: ['id', 'displayName', 'email', 'image'],
});

const getUser = async (id) => {
  const user = await User.findByPk(id, {
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  if (user === null) {
    throw new Error('userNotExist');
  }

  return user;
};

module.exports = {
  findOrCreate,
  findOne,
  getAllUsers,
  getUser,
  findUserByEmail,
};
