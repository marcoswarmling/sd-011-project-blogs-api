const { Users } = require('../models');
const gerarJWT = require('../gerarJwt');

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
    console.log(userExists);
    if (userExists) {
      return { message: 'User already registered' };
    }
    console.log(userExists);
    const response = await Users.create(userData);
   
    const { password } = response;
    const token = gerarJWT(password);    
    return token;
  } catch (e) {
    console.log('erro');
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
    const token = gerarJWT({ id, email });    
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

const getById = async (id) => {
  try {
    const response = await Users.findOne({ where: { id }, raw: true });
    if (!response) {
      return { message: 'User does not exist' };
    }
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
  getById,
}; 