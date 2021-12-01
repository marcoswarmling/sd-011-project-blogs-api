const { verifyEmail, verifyPassword } = require('../Helpers/validateLogin');

function loginMiddleware(req, res, next) {
  const { email, password } = req.body;

  const validEmail = verifyEmail(email);
  if (validEmail.status) {
    return res.status(validEmail.status).json({ message: validEmail.message });
  }

  const validPassword = verifyPassword(password);
  console.log(validPassword);
  if (validPassword.status) {
    return res.status(validPassword.status).json({ message: validPassword.message });
  }
  next();
}

module.exports = { loginMiddleware };