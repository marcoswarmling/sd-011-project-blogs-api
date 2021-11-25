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

const userRegister = async ({ displayName, email, password, image }) => {
  const existingUser = await User.findOne({
    where: { email },
    include: [{ model: User, as: 'users' }],
  });
  if (existingUser) {
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
  return User.insert({ displayName, email, password, image });
};

module.exports = {
  userRegister,
};
