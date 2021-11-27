const { Users } = require('../models');
const loginUserValidation = require('../validations/loginUserValidation');

const loginUser = async ({ email, password }) => {
  const query = { where: { email, password } };

  try {
    loginUserValidation.validLoginEmail(email); 
    loginUserValidation.validLoginPassword(password);

    const response = await Users.findOne(query);
    return response;
  } catch (e) {
    return { error: { message: e.message, code: e.code } };
  }
};

module.exports = {
  loginUser,
};