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

module.exports = {
  create,
  findUserByEmail,
};