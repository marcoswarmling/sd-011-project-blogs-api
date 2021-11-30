// const { ObjectId } = require('mongodb');
const { User } = require('../../models');

const STATUS_BAD_REQUEST = 400;
const STATUS_CONFLICT = 409;

const MSG_INVALID_ENTRIES = 'Invalid entries. Try again.';
const MSG_EMAIL_EXISTS = 'Email already registered';

function nameValidator(name) {
  if (!name) {
    return { status: STATUS_BAD_REQUEST, message: MSG_INVALID_ENTRIES };
  }

  return {};
}

const emailValidator = async (email) => {
    const emailRegexp = new RegExp('\\S+@\\S+\\.\\S+');

    if (!email) {
      return { status: STATUS_BAD_REQUEST, message: MSG_INVALID_ENTRIES };
    }

    if (!emailRegexp.test(email)) {
      return { status: STATUS_BAD_REQUEST, message: MSG_INVALID_ENTRIES };
    }

    const user = await User.getByEmail(email);

    if (user.email) {
      return { status: STATUS_CONFLICT, message: MSG_EMAIL_EXISTS };
    }

  return {};
};

function passwordValidator(password) {
  if (!password) {
    return { status: STATUS_BAD_REQUEST, message: MSG_INVALID_ENTRIES };
  }

  return {};
}

// const validProductId = (id) => {
//   if (!ObjectId.isValid(id)) { // Get error if invalid id format
//     return { 
//       status: STATUS_UNPROCESSABLE_ENTITY, code: CODE_INVALID_DATA, message: MSG_WRONG_ID }; 
//   }
// };

module.exports = {
  nameValidator,
  emailValidator,
  passwordValidator,
};