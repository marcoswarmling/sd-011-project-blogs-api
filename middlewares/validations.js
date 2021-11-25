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

const validateEmailLogin = (req, _res, next) => {
  const { email } = req.body;

  if (email === undefined) {
    return next({
      code: 'emptyEmail',
      message: '"email" is required',
    });
  }

  if (email.length === 0) {
    return next({
      code: 'emailLoginIsEmpty',
      message: '"email" is not allowed to be empty',
    });
  }

  next();
};

const validatePasswordLogin = (req, _res, next) => {
  const { password } = req.body;

  if (password === undefined) {
    return next({
      code: 'emptyPassword',
      message: '"password" is required',
    });
  }

  if (password.length === 0) {
    return next({
      code: 'passwordLoginIsEmpty',
      message: '"password" is not allowed to be empty',
    });
  }

  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateEmailLogin,
  validatePasswordLogin,
};
