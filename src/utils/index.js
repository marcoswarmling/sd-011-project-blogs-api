module.exports = {
  invalidNameLength: {
    status: 400,
    message: '"displayName" length must be at least 8 characters long',
  },
  invalidEmailFormat: {
    message: '"email" must be a valid email',
    status: 400,
  },
  // invalidJWT: {
  //   message: 'jwt malformed',
  //   status: 401,
  // },
  // missingToken: {
  //   message: 'missing auth token',
  //   status: 401,
  // },
  // errorData: {
  //   message: 'Incorrect username or password',
  //   status: 401,
  // },
  // recipeNotFound: {
  //   message: 'recipe not found',
  //   status: 404,
  // },
  // emailAreadyExists: {
  //   message: 'Email already registered',
  //   status: 409,
  // },
  default: {
    status: 500,
    message: 'Internal error.',
  },
};