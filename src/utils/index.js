module.exports = {
  invalidNameLength: {
    status: 400,
    message: '"displayName" length must be at least 8 characters long',
  },
  invalidEmailFormat: {
    message: '"email" must be a valid email',
    status: 400,
  },
  invalidPasswordFormat: {
    message: '"password" length must be 6 characters long',
    status: 400,
  },
  nullPassword: {
    message: '"password" is required',
    status: 400,
  },
  emptyField: {
    message: 'Preencha displayName e email validos ',
    status: 400,
  },
  userAlreadyRegistered: {
    message: 'User already registered',
    status: 409,
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
  testeError: {
    message: 'Deu erro teste do middleware global',
    status: 501,
  },
  default: {
    status: 500,
    message: 'Internal error.',
  },
};
