const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');

// lógica adaptada de https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
const validEmail = (email) => {
  if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm)) return true;
  return false;
};

const validName = (name) => {
  if (name.length >= 8) return true;
  return false;
};

const validPass = (pass) => {
  if (pass.length === 6) return true;
  return false;
};

const existingUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  // console.log(user);
  return user;
};

const tokenGenerator = (displayName, email, password, image) => {
  const secret = process.env.JWT_SECRET;
  
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const payload = {
    displayName,
    email,
    password,
    image,
  };

  const token = jwt.sign({ data: payload }, secret, jwtConfig);
  return token;
};

const userRegister = async ({ displayName, email, password, image }) => {
  if (await existingUser(email) !== null) {
    return { error: { code: 'conflict' } };
  }
  if (!validEmail(email)) {
    return { error: { code: 'invalidEmail' } };
  }
  if (!validPass(password)) {
    return { error: { code: 'invalidPass' } };
  }
  if (!validName(displayName)) {
    return { error: { code: 'invalidName' } };
  }
  await User.create({ displayName, email, password, image });
  return {
    token: tokenGenerator(displayName, email, password, image),
  };
};

module.exports = {
  userRegister,
};
