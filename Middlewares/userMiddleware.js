// const { usersMessages } = require('../Helpers/status&messages');
const { displayNameValidation, emailValidation,
  passwordValidation } = require('../Helpers/validateUser');

function userMiddleware(req, res, next) {
  const { displayName, email, password } = req.body;
  // displayName validation
  const validName = displayNameValidation(displayName);
  if (validName.status) {
    return res.status(validName.status).json({ message: validName.message });
  }
  // email validation
  const isValidEmail = emailValidation(email);
  if (isValidEmail.status) {
    return res.status(isValidEmail.status).json({ message: isValidEmail.message });
  }
  // password validation
  const validPassword = passwordValidation(password);
  if (validPassword.status) {
    return res.status(validPassword.status).json({ message: validPassword.message });
  }
  next();
}

module.exports = { userMiddleware };
