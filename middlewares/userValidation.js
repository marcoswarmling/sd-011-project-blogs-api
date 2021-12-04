const NAME_ERROR = {
  message: '"displayName" length must be at least 8 characters long',
};

const EMAIL_VALID_ERROR = {
  message: '"email" must be a valid email',
};

const EMAIL_REQUIRED_ERROR = {
  message: '"email" is required',
};

const PASSWORD_LENGTH_ERROR = {
  message: '"password" length must be 6 characters long',
};

const PASSWORD_REQUIRED_ERROR = {
  message: '"password" is required',
};

const nameValidator = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res
      .status(400)
      .json(NAME_ERROR);
  }

  next();
};

const emailValidator = (req, res, next) => {
  const { email } = req.body;

  if (email === undefined) {
    return res
      .status(400)
      .json(EMAIL_REQUIRED_ERROR);
  }

  const expReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (!expReg.test(email) && email.length !== 0) {
    return res
      .status(400)
      .json(EMAIL_VALID_ERROR);
  }

  next();
};

const passwordValidator = (req, res, next) => {
  const { password } = req.body;

  if (password === undefined) {
    return res
      .status(400)
      .json(PASSWORD_REQUIRED_ERROR);
  }

  if (password.length !== 6 && password.length !== 0) {
    return res
      .status(400)
      .json(PASSWORD_LENGTH_ERROR);
  }

  next();
};

module.exports = {
  nameValidator,
  emailValidator,
  passwordValidator,
};