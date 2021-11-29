const errors = require('../../../schemas/errorMessage');

const validateEmail = (email) => {
  if (email === '') return errors.login.emptyEmail;
  if (!email) return errors.login.requiredEmail;
};

const validatePassword = (password) => {
  if (password === '') return errors.login.emptyPassword;
  if (!password) return errors.user.requiredPassword;
};

// Função de luiz Wendell feita para verificar se foi registrado algum error nas
// keys, fazendo retornar o error no middleware generico de respostas
module.exports = async (request, _response, next) => {
  const { email, password } = request.body;
  const validatorsDictionary = {
    email: validateEmail,
    password: validatePassword,
  };
  const properties = [{ email }, { password }];

  for (let index = 0; index < properties.length; index += 1) {
    const property = properties[index];
    const [key, value] = Object.entries(property)[0];
    const validationError = validatorsDictionary[key](value);
    if (validationError) return next(validationError);
  }

  return next();
};