const { Users } = require('../models');
const generateJWT = require('../auth/generateJWT');

const findUserByEmail = async (email) => {
  try {
    const response = Users.findOne({ where: { email }, raw: true });
    return response;
  } catch (e) {
    return { error: 'Something went wrong' };
  }
};

const create = async (userData) => {
  try {
    const { email } = userData;
    const userExists = await findUserByEmail(email);
    if (userExists) {
      return { message: 'User already registered' };
    }
    const response = await Users.create(userData);
    const { id } = response;
    const token = generateJWT({ id, email });    
    return token;
  } catch (e) {
    return { error: 'Something went wrong' };
  }
};

const login = async (loginData) => {
  try {
    const { email, password } = loginData;
    const userExists = await findUserByEmail(email);
    if (!userExists || userExists.password !== password) {
      return { message: 'Invalid fields' };
    }
    const { id } = userExists;
    const token = generateJWT({ id, email });    
    return token;
  } catch (e) {
    return { error: 'Something went wrong' };
  }
};

const getAll = async () => {
  try {
    const response = await Users.findAll({ raw: true });   
    return response;
  } catch (e) {
    return { error: 'Something went wrong' };
  }
};

module.exports = {
  create,
  findUserByEmail,
  login,
  getAll,
};