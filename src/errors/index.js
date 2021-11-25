module.exports = {
  emailAlreadyUsed: {
    code: 409,
    message: 'User already registered',
  },
  loginInvalidFields: {
    code: 400,
    message: 'Invalid fields',
  },
  tokenNotFound: {
    code: 401,
    message: 'Token not found',
  },
  tokenExpiredOrInvalid: {
    code: 401,
    message: 'Expired or invalid token',
  },
  userNotFound: {
    code: 404,
    message: 'User does not exist',
  },
};
