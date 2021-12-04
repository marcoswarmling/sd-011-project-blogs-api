const EMAIL_EMPTY_ERROR = {
  message: '"email" is not allowed to be empty',
};

const PASSWORD_EMPTY_ERROR = {
  message: '"password" is not allowed to be empty',
};

const emailFieldValidator = (req, res, next) => {
  const { email } = req.body;

  if (email.length === 0) {
    return res
      .status(400)
      .json(EMAIL_EMPTY_ERROR);
  }

  next();
};

const passwordFieldValidator = (req, res, next) => {
  const { password } = req.body;

  if (password.length === 0) {
    return res
      .status(400)
      .json(PASSWORD_EMPTY_ERROR);
  }

  next();
};

module.exports = {
  emailFieldValidator,
  passwordFieldValidator,
};