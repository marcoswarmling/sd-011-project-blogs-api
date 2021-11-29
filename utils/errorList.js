const userAlreadyExists = {
  err: {
    status: 409,
    message: 'User already registered',
  },
};

const userNotFound = {
  err: {
    status: 404,
    message: 'User does not exist',
  },
};

const invalidLogin = {
  err: {
    status: 400,
    message: 'Invalid fields',
  },
};

const tokenNotFound = {
  err: {
    status: 401,
    message: 'Token not found',
  },
};

const invalidToken = {
  err: {
    status: 401,
    message: 'Expired or invalid token',
  },
};

const invalidCatsArray = {
  err: {
    status: 400,
    message: '"categoryIds" not found',
  },
};

const postNotFound = {
  err: {
    status: 404,
    message: 'Post does not exist',
  },
};

module.exports = {
  userAlreadyExists,
  userNotFound,
  invalidLogin,
  tokenNotFound,
  invalidToken,
  invalidCatsArray,
  postNotFound,
};