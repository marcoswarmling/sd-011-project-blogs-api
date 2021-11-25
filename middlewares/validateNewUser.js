const validateDisplayName = (req, _res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return next({
      code: 'invalidDisplayName',
      message: '"displayName" length must be at least 8 characters long', 
    });
  }

  next();
};

const validateEmail = (req, _res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S/;

  if (!email) {
    return next({
      code: 'emptyEmail',
      message: '"email" is required',
    });
  }

  if (!emailRegex.test(email)) {
    return next({
      code: 'invalidEmail',
      message: '"email" must be a valid email',
    });
  }

  next();
};

const validatePassword = (req, _res, next) => {
  const { password } = req.body;

  if (!password) {
    return next({
      code: 'emptyPassword',
      message: '"password" is required',
    });
  }

  if (password.length !== 6) {
    return next({
      code: 'invalidPassword',
      message: '"password" length must be 6 characters long',
    });
  }

  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};
