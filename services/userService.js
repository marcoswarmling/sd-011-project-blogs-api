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
    return { error: 'Something went wrong' };
  }
};

const login = async (data) => {
  try {
    const { email, password } = data;
    const existEmail = await findByEmail(email);
    if (!existEmail || existEmail.password !== password) {
      return { message: 'Invalid fields' };
    }
    const { id } = existEmail;
    const token = createJWT({ id, email });
    return token;
  } catch (error) {
    return { error: 'Something went wrong' };
  }
};

module.exports = {
  create,
  login,
};