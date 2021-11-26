const errors = require('../../../schemas/errorMessage');

const validateName = (name) => {
  if (!name || name.length < 8) return errors.user.invalidNameLength;
};

const validateEmail = (email) => {
  const regex = /[\w\d.+_-]+@[\w]+.com/;
  if (!email) return errors.user.requiredEmail;
  if (!regex.test(email)) return errors.user.invalidEmail;
};

const validatePassword = (password) => {
  if (!password) return errors.user.requiredPassword;
  if (password.length < 6) return errors.user.invalidPasswordLength;
};

// Função de luiz Wendell feita para verificar se foi registrado algum error nas
// keys, fazendo retornar o error no middleware generico de respostas
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