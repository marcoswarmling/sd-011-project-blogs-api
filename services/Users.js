const { Users } = require('../models');
const gerarJWT = require('../gerarJwt');

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
    return { error: 'Something went wrong' };
  }
};

module.exports = {
  create,
  findUserByEmail,
}; 