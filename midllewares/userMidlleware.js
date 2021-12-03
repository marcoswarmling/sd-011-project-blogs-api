const validate = require('../validations/index');

const UserRegisterValidation = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const isNameValid = await validate.validateDisplayName(displayName);
  if (isNameValid) return res.status(isNameValid.code).json({ message: isNameValid.message });

  const isEmailValid = await validate.validateEmail(email);
  if (isEmailValid) return res.status(isEmailValid.code).json({ message: isEmailValid.message });

  const isPwdValid = await validate.validatePassword(password);
  if (isPwdValid) return res.status(isPwdValid.code).json({ message: isPwdValid.message });

  next();
};

module.exports = {
  UserRegisterValidation,
};