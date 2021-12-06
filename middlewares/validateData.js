const validatDisplayname = (displayName, length) => {
  if (!displayName || displayName === '' || displayName.length < length) {
    return {
      error: {
        code: 400,
        message: 'displayNme lenght must be at least 8 characters long',
      },
    };
  }

  return true;
};

const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (!email) {
    return {
      error: {
        code: 400,
        message: 'email is required',
      },
    };
  }

  if (!regex.test(email)) {
    return {
      error: {
        code: 400,
        message: 'email must be a valid email',
      },
    };
  }

  return true;
};

const validatePassWord = (email, length) => {
  if (!email) {
    return {
      error: {
        code: 400,
        message: 'password is required',
      },
    };
  }

  if (email === '' || email.length < length) {
    return {
      error: {
        code: 400,
        message: 'password lenght must be at least 8 characters long',
      },
    };
  }

  return true;
};

module.exports = {
  validatDisplayname,
  validateEmail,
  validatePassWord,
};
