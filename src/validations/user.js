const { User } = require('../models');

const verifyDisplayName = (displayName) => {
  if (typeof displayName !== 'string' || displayName.length < 8) {
    return {
      err: {
        status: 400,
      },
      message: '"displayName" length must be at least 8 characters long',
    };
  }
  return null;
};

const verifyEmail = (email) => {
  if (!email) {
    return {
      err: {
        status: 400,
      },
      message: '"email" is required',
    };
  }
  const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;
  const verify = validEmail.test(email);
  if (!verify) {
    return { err: {
        status: 400,
      },
      message: '"email" must be a valid email',
    };
  }
  return null;
};

const verifyPassword = (password) => {
  if (!password) {
    return {
      err: {
        status: 400,
      },
      message: '"password" is required',
    };
  }

  if (password.length !== 6) {
    return {
      err: {
        status: 400,
      },
      message: '"password" length must be 6 characters long',
    };
  }
  return null;
};

const verifyIfEmailIsAlreadyUsed = async (email) => {
  if (!email) {
    return {
      err: {
        status: 400,
      },
      message: '"email" is required',
    };
  }

  const user = await User.findOne({ where: { email } });
  if (user) {
    return {
      err: {
        status: 409,
      },
      message: 'User already registered',
    };
  }
  return null;
};

module.exports = {
  verifyDisplayName,
  verifyEmail,
  verifyPassword,
  verifyIfEmailIsAlreadyUsed,
};