const { User } = require('../../models');

const STATUS_BAD_REQUEST = 400;

const MSG_MISSING_EMAIL = '"email" is required';
const MSG_MISSING_PASSW = '"password" is required';

const MSG_EMPTY_EMAIL = '"email" is not allowed to be empty';
const MSG_EMPTY_PASSW = '"password" isnot allowed to be empty';

const MSG_INVALID_FIELDS = 'Invalid fields';

function passwordValidator(password, userData) {
  if (!password) {
    return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_PASSW };
  }

  if (password === '') {
    return { status: STATUS_BAD_REQUEST, message: MSG_EMPTY_PASSW };
  }

  if (password !== userData.password) {
    return { status: STATUS_BAD_REQUEST, message: MSG_INVALID_FIELDS };
  }

  return {};
}

const loginValidator = async (email, password) => {
    if (!email) {
      return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_EMAIL };
    }

    if (email === '') {
      return { status: STATUS_BAD_REQUEST, message: MSG_EMPTY_EMAIL };
    }

    const userData = await User.findOne({ where: { email } });

    if (userData === null) {
      return { status: STATUS_BAD_REQUEST, message: MSG_INVALID_FIELDS };
    }

    const passResult = passwordValidator(password, userData); // Not asked by Trybe "functional requirements", but I implemented it

    if (passResult.status) {
      const { status, message } = passResult;
      return { status, message };
    }

  return userData;
};

module.exports = {
  loginValidator,
};