const error = require('./messages');

const nameValidation = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8 || typeof displayName !== 'string') {
    return res.status(error.displayName.status)
      .json({ message: error.displayName.message });
  }

  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const receivedEmail = new RegExp('\\S+@\\S+\\.\\S+');
  const validate = receivedEmail.test(email);

  if (email === '') {
    return res.status(error.emptyEmail.status)
    .json({ message: error.emptyEmail.message });
  }

  if (!email) {
    return res.status(error.requiredEmail.status)
    .json({ message: error.requiredEmail.message });
  }

  if (!validate) {
    return res.status(error.email.status)
      .json({ message: error.email.message });
  }

  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  console.log(password);

  if (password === '') {
    return res.status(error.emptyPassword.status)
    .json({ message: error.emptyPassword.message });
  }

  if (!password) {
    return res.status(error.requiredPassword.status)
    .json({ message: error.requiredPassword.message });
  }

  if (password.length < 6) {
    return res.status(error.password.status)
    .json({ message: error.password.message });
  }

  next();
};

module.exports = {
  nameValidation,
  emailValidation,
  passwordValidation,
};
