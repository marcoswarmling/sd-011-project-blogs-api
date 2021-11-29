module.exports = {
  displayNameIsRequired: {
    message: '"displayName" is required',
    status: 400,
  },
  invalidName: {
    message: '"displayName" length must be at least 8 characters long',
    status: 400,
  },
  emailIsRequired: {
    message: '"email" is required',
    status: 400,
  },
  invalidEmail: {
    message: '"email" must be a valid email',
    status: 400,
  },
  passwordIsRequired: {
    message: '"password" is required',
    status: 400,
  },
  invalidPassword: {
    message: '"password" length must be 6 characters long',
    status: 400,
  },
  userAlreadyRegistered: {
    message: 'User already registered',
    status: 409,
  },
  invalidFields: {
    message: 'Invalid fields',
    status: 400,
  },
  emailNotAllowedEmpty: {
    message: '"email" is not allowed to be empty',
    status: 400,
  },
  passwordNotAllowedEmpty: {
    message: '"password" is not allowed to be empty',
    status: 400,
  },
  tokenMalformed: {
    message: 'Expired or invalid token',
    status: 401,
  },
  tokenNotFound: {
    message: 'Token not found',
    status: 401,
  },
  userNotFound: {
    message: 'User does not exist',
    status: 404,
  },
  nameIsRequired: {
    message: '"name" is required',
    status: 400,
  },
  titleIsRequired: {
    message: '"title" is required',
    status: 400,
  },
  contentIsRequired: {
    message: '"content" is required',
    status: 400,
  },
  categoryIsRequired: {
    message: '"categoryIds" is required',
    status: 400,
  },
  categoryNotFound: {
    message: '"categoryIds" not found',
    status: 400,
  },
  postDoesNotExist: {
    message: 'Post does not exist',
    status: 404,
  },
  categoriesCannotBeEdited: {
    message: 'Categories cannot be edited',
    status: 400,
  },
  unauthorizedUser: {
    message: 'Unauthorized user',
    status: 401,
  },
};