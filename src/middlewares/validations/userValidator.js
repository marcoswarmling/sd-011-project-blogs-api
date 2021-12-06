const { isValidEmail } = require('../../helpers/emailValidator');
const errors = require('../../schemas/errors');

const validateName = (name) => {
  if (!name || name.length < 8) return errors.user.invalidNameLength;
};

const validateEmail = (email) => {
  if (!email) return errors.user.requiredEmail;
  if (!isValidEmail(email)) return errors.user.invalidEmail;
};

const validatePassword = (password) => {
  if (!password) return errors.user.requiredPassword;
  if (password.length < 6) return errors.user.invalidPasswordLength;
};

module.exports = async (request, _response, next) => {
  const { displayName, email, password } = request.body;
  const validatorsDictionary = {
    displayName: validateName,
    email: validateEmail,
    password: validatePassword,
  };
  const properties = [{ displayName }, { email }, { password }];

  for (let index = 0; index < properties.length; index += 1) {
    const property = properties[index];
    const [key, value] = Object.entries(property)[0];
    const validationError = validatorsDictionary[key](value);

    if (validationError) return next(validationError);
  }

  return next();
};