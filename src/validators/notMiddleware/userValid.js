// const { ObjectId } = require('mongodb');
const { User } = require('../../models');

const STATUS_BAD_REQUEST = 400;
const STATUS_CONFLICT = 409;

const MSG_MISSING_EMAIL = '"email" is required';
const MSG_MISSING_PASSW = '"password" is required';
const MSG_INVALID_EMAIL = '"email" must be a valid email';
const MSG_EMAIL_EXISTS = 'User already registered';
const MSG_NAME_LENGTH = '"displayName" length must be at least 8 characters long';
const MSG_PASSW_LENGTH = '"password" length must be 6 characters long';

function nameValidator(name) {
  // if (!name) {
  //   return { status: STATUS_BAD_REQUEST, message: MSG_INVALID_ENTRIES };
  // }

  if (name.length < 8) {
    return { status: STATUS_BAD_REQUEST, message: MSG_NAME_LENGTH };
  }

  return {};
}

const emailValidator = async (email) => {
    const emailRegexp = new RegExp('\\S+@\\S+\\.\\S+');

    if (!email) {
      return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_EMAIL };
    }

    if (!emailRegexp.test(email)) {
      return { status: STATUS_BAD_REQUEST, message: MSG_INVALID_EMAIL };
    }

    const user = await User.findOne({ where: { email } });

    if (user !== null) {
      return { status: STATUS_CONFLICT, message: MSG_EMAIL_EXISTS };
    }

  return {};
};

function passwordValidator(password) {
  if (!password) {
    return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_PASSW };
  }

  if (password.length !== 6) {
    return { status: STATUS_BAD_REQUEST, message: MSG_PASSW_LENGTH };
  }

  return {};
}

module.exports = {
  nameValidator,
  emailValidator,
  passwordValidator,
};