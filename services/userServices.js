const { User } = require('../models');
const { checkIfPasswordIsCorrect, validateLoginData } = require('../validators/loginValidators');
const { validateUser, verifyIfEmailAlreadyRegistered } = require('../validators/userValidators');

const getAll = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (e) {
    console.log(e.message);
  }
};

const createUser = async (displayName, email, password, image) => {
  const isValidUser = validateUser(displayName, email, password);
  if (isValidUser.type === 'error') {
    return isValidUser;
  }
  const emailAlreadyRegistered = await verifyIfEmailAlreadyRegistered(email);
  if (emailAlreadyRegistered.type === 'error') {
    return emailAlreadyRegistered;
  }
  try {
    const createResponse = await User.create({ displayName, email, password, image });
    return { type: 'success', payload: createResponse };
  } catch (e) {
    console.log(e.message);
  }
};

const login = async (email, password) => {
  const validDataFromBody = validateLoginData(email, password);
  if (validDataFromBody.type === 'error') return validDataFromBody;
  try {
    const loginResponse = await User.findOne({ where: { email } });
    if (!loginResponse) return { type: 'error', code: 400, message: 'Invalid fields' };
    const validPassword = checkIfPasswordIsCorrect(loginResponse.password, password);
    if (validPassword.type === 'error') return validPassword;
    return { type: 'success', payload: loginResponse };
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getAll,
  createUser,
  login,
};
