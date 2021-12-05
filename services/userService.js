const validateUserName = (name) => {
  if (name && name.length < 8) {
    return {
      message: '"displayName" length must be at least 8 characters long',
      status: 400,
    };
  }

  return null;

};

const validateUserEmail = (email) => {
  if (!email) {
    return {
      message: '"email" is required',
      status: 400,
    };
  }

  const regex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  const emailRegexTest = regex.test(email);

  if (!emailRegexTest) {
    return {
      message: '"email" must be a valid email',
      status: 400,
    };
  }

  return null;
}

const validateUserPassword = (password) => {
  if (!password) {
    return {
      message: '"password" is required',
      status: 400,
    };

  }

  if (password.length < 6) {
    return {
      message: '"password" length must be 6 characters long',
      status: 400,
    };
  }

  return false;
};

module.exports = {
  validateUserName,
  validateUserEmail,
  validateUserPassword
};