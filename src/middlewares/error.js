const errorStatus = {
  MissingAuthToken: { code: 401, message: 'missing auth token' },
  UserdoesNotExist: { code: 404, message: 'User does not exist' },
  TokenNotFound: { code: 401, message: 'Token not found' },
  Unauthorized: { code: 401, message: 'Unauthorized' },
  InvalidToken: { code: 401, message: 'Expired or invalid token' },
  CategoryNotFound: { code: 400, message: '"categoryIds" not found' },
  ENOENT: { code: 404, message: 'Resource not found' },
  EmailAlreadyRegistered: { code: 409, message: 'Email already registered' },
  AllFieldsRequired: { code: 401, message: 'All fields must be filled' },
  InvalidEntries: { code: 400, message: 'Invalid entries. Try again.' },
  userLoginError: { message: 'Incorrect username or password', code: 401 },
  ONLYJPG: { code: 404, message: 'Only jpeg files are allowed' },
  RecipeNotFound: { code: 404, message: 'Recipe not found' },
  '"categoryIds" is not allowed': {
    code: 400,
    message: 'Categories cannot be edited',
  },
};

module.exports = (err, _req, res, _next) => {
  if (err.message && err.message === '"categoryIds" is not allowed') {
    const { message } = err;
    return res
      .status(errorStatus[message].code)
      .json({ message: errorStatus[message].message });
  }

  if (err.code && err.message) {
    const { code, message } = err;
    return res.status(code).json({ message });
  }

  const { code, message } = errorStatus[err];

  res.status(code).json({ message });
};
