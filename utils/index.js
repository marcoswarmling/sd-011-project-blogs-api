module.exports = {
  invalidNameLength: {
    status: 400,
    message: '"displayName" length must be at least 8 characters long',
  },
  emptyCategorieField: {
    status: 400,
    message: '"name" is required',
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
  nullemail: {
    message: '"email" is required',
    status: 400,
  },
  emptyPassword: {
    message: '"password" is not allowed to be empty',
    status: 400,
  },
  emptyEmail: {
    message: '"email" is not allowed to be empty',
    status: 400,
  },
  emptyField: {
    message: 'Preencha displayName e email validos',
    status: 400,
  },
  invalidField: {
    message: 'Invalid fields',
    status: 400,
  },
  jwtTokenError: {
    message: 'Expired or invalid token',
    status: 401,
  },
  missingToken: {
    message: 'Token not found',
    status: 401,
  },
  userNotExist: {
    message: 'User does not exist',
    status: 404,
  },
  userAlreadyRegistered: {
    message: 'User already registered',
    status: 409,
  },
  CategoriesAlreadyRegistered: {
    message: 'Categorie already registered',
    status: 409,
  },
  default: {
    status: 500,
    message: 'Internal error.',
  },
  testeError: {
    message: 'Deu erro teste do middleware global',
    status: 501,
  },
};
