const { User } = require('../models');
const {
  validatDisplayname,
  validateEmail,
  validatePassWord,
} = require('../middlewares/validateData');

const validaData = (displayName, email, password) => {
  const nM = validatDisplayname(displayName, 8);
  const eM = validateEmail(email);
  const pW = validatePassWord(password, 6);

  return [nM, eM, pW];
};

const searchForError = (displayName, email, password) => {
  const result = validaData(displayName, email, password);
  const find = result.filter((item) => item.error);
  return find;
};

const resultData = (displayName, email, password) => {
  const result = searchForError(displayName, email, password);
  if (result.length > 0) return result[0];
  return true;
};

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return {
      error: {
        code: 409,
        message: 'User already registered',
      },
    };
  }

  return false;
};

const createUser = async (displayName, email, password, image) => {
  const existsUser = await findUser(email);

  if (existsUser) return existsUser;

  const newUser = await User.create({ displayName, email, password, image });
  const { password: _, ...user } = newUser.dataValues;
  return user;
};

module.exports = {
  resultData,
  createUser,
};
