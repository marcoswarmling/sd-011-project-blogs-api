const errors = require('../../../schemas/errorsSchema');

module.exports = async (request, _response, next) => {
  const { email, password } = request.body;

  if (email === '') return next(errors.login.emptyEmail);
  if (password === '') return next(errors.login.emptyPassword);
  if (!email) return next(errors.login.requiredEmail);
  if (!password) return next(errors.login.requiredPassword);

  return next();
};
