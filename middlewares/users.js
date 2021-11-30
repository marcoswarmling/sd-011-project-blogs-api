const displayNameValidation = (req, res, next) => {
  if (req.body.displayName <= 8) {
    return res.status(400).json({
      message: 'displayName must be at least 8 characters long' });
  }

  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

  if (!email.test(emailRegex)) {
    return res.status(400).json({ message: 'email must be a valid email' });
  }

  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;

  if (password.length !== 6) {
    return res.status(400).json({
      message: 'password must be at least 6 characters long' });
  }

  next();
};

const requiredPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'password is required' });
  }

  next();
};
module.exports = {
  displayNameValidation,
  emailValidation,
  passwordValidation,
  requiredPassword,
};
