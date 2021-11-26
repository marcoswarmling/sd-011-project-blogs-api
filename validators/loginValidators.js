const { validateEmail, validatePassword } = require('./userValidators');

const checkIfPasswordIsCorrect = (passwordFromDb, passwordFromLogin) => {
  if (passwordFromDb === passwordFromLogin) {
    return { type: 'success' };
  }
  return { type: 'error', code: 400, message: 'Invalid fields' };
};

function validateLoginData(email, passsword) {
  if (validateEmail(email).type === 'error') return validateEmail(email);
  if (validatePassword(passsword).type === 'error') return validatePassword(passsword);
  return { type: 'success' };
}

module.exports = {
  checkIfPasswordIsCorrect,
  validateLoginData,
};