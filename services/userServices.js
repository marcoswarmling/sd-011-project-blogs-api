const { User } = require('../models');
const { checkIfPasswordIsCorrect, validateLoginData } = require('../validators/loginValidators');
const { validateUser, 
  verifyIfEmailAlreadyRegistered, 
  validateToken } = require('../validators/userValidators');

const getAll = async (token) => {
  if (validateToken(token).type === 'error') return validateToken(token);
  try {
    // https://stackoverflow.com/questions/31679838/sequelizejs-findall-exclude-field
    const allUsers = await User.findAll({ attributes: { exclude: ['password'] }, raw: true });
    return { type: 'success', payload: allUsers };
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

const getById = async (id, token) => {
  if (validateToken(token).type === 'error') return validateToken(token);
  const getByIdResponse = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!getByIdResponse) return { type: 'error', code: 404, message: 'User does not exist' }; 
  return { type: 'success', payload: getByIdResponse };
};

module.exports = {
  getAll,
  createUser,
  login,
  getById,
};
