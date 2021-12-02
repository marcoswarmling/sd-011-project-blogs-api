const { Users } = require('../models');
const generateJWT = require('../auth/generateJWT');

const serverError = 'Something went wrong';

const findUserByEmail = async (email) => {
  try {
    const response = Users.findOne({ where: { email }, raw: true });
    return response;
  } catch (e) {
    return { error: serverError };
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
    return { error: serverError };
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
    return { error: serverError };
  }
};

const getAll = async () => {
  try {
    const response = await Users.findAll({ raw: true });   
    return response;
  } catch (e) {
    return { error: serverError };
  }
};

const getById = async (id) => {
  try {
    const response = await Users.findOne({ where: { id }, raw: true });
    if (!response) {
      return { message: 'User does not exist' };
    }
    return response;
  } catch (e) {
    return { error: serverError };
  }
};

const deleteById = async (id) => {
  try {
    const response = await Users.destroy({ where: { id } });
    return response;
  } catch (e) {
    return { error: serverError };
  }
};

module.exports = {
  create,
  findUserByEmail,
  login,
  getAll,
  getById,
  deleteById,
};