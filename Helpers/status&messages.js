const status = {
  sucess: 200,
  create: 201,
  noContent: 204,
  badRequest: 400,
  unauth: 401,
  forbidden: 403,
  notFound: 404,
  conflict: 409,
  unprocessableEntity: 422,
  intServerError: 500,
};

const intServerError = {
  unknown: 'Sorry, I dont know why this is not working',
};

const usersMessages = {
  displayName: '"displayName" length must be at least 8 characters long',
  email: '"email" must be a valid email',
  emailRequired: '"email" is required',
  password: '"password" length must be 6 characters long',
  passwordRequired: '"password" is required',
  emailConflict: 'User already registered',
  userDontExists: 'User does not exist',
};

const loginMessages = {
  emailRequired: '"email" is required',
  emailEmpty: '"email" is not allowed to be empty',
  passwordRequired: '"password" is required',
  passwordEmpty: '"password" is not allowed to be empty',
  notRegistered: 'Invalid fields',
};

const tokenMessages = {
  notFound: 'Token not found',
  invalid: 'Expired or invalid token',
};

module.exports = { status, intServerError, usersMessages, loginMessages, tokenMessages };