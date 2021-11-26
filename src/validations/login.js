const { User } = require('../models');

const emailRequired = {
  err: {
    status: 400,
  },
    message: '"email" is required',
};

const passwordRequired = {
  err: {
    status: 400,
  },
    message: '"password" is required',
};

const verifyEmail = (email) => {
  if (!email && email !== '') return emailRequired;

  if (email === '') {
    return {
      err: {
        status: 400,
      },
      message: '"email" is not allowed to be empty',
    };
  }
  return null;
};

const verifyPassword = (password) => {
  if (!password && password !== '') return passwordRequired;

  if (password === '') {
    return { err: {
        status: 400,
      },
      message: '"password" is not allowed to be empty',
    };
  }
  return null;
};

const verifyIfEmailIsAlreadyUsed = async (email, password) => {
  if (!email) return emailRequired;
  if (!password) return passwordRequired;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return {
      err: {
        status: 400,
      },
      message: 'Invalid fields',
    };
  }
  return user;
};

module.exports = {
  verifyEmail,
  verifyPassword,
  verifyIfEmailIsAlreadyUsed,
};