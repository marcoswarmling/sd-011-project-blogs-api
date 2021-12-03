const validate = require('../validations/index');

const LoginValidation = async (req, res, next) => {
  const { email, password } = req.body;

  const isEmailValid = await validate.validateEmail(email);
  if (isEmailValid) return res.status(isEmailValid.code).json({ message: isEmailValid.message });

  const isPwdValid = await validate.validatePassword(password);
  if (isPwdValid) return res.status(isPwdValid.code).json({ message: isPwdValid.message });

  next();
};

module.exports = {
  LoginValidation,
};