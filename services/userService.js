const { Users } = require('../models');
const { createJWT } = require('../auth/createJWT');

const findByEmail = async (email) => {
  try {
    const response = Users.findOne({ where: { email } });
    return response;
  } catch (error) {
    return { error: 'Algo deu errado' };
  }
};

const create = async (data) => {
  try {
    const { email } = data;
    const existEmail = await findByEmail(email);
    if (existEmail) return { message: 'User already registered' };
    const response = await Users.create(data);
    const { password } = response;
    const token = createJWT(password);
    return token;
  } catch (error) {
    return { error: 'Algo deu errado' };
  }
};

module.exports = {
  create,
};