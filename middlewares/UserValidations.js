const helpers = require('../helpers/userHelpers');

const registerUserValidation = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  // console.log(req.baseUrl);
  const isNameValid = await helpers.validateDisplayName(displayName);
  if (isNameValid) return res.status(isNameValid.code).json({ message: isNameValid.message });

  const isEmailValid = await helpers.validateEmail(email);
  if (isEmailValid) return res.status(isEmailValid.code).json({ message: isEmailValid.message });

  const isPwdValid = await helpers.validatePwd(password);
  if (isPwdValid) return res.status(isPwdValid.code).json({ message: isPwdValid.message });

  next();
};

module.exports = {
  registerUserValidation,
};
