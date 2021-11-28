/* eslint-disable max-lines-per-function */
const errorStatus = {
  MissingAuthToken: { code: 401, message: 'missing auth token' },
  ENOENT: { code: 404, message: 'resource not found' },
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
  console.log(err);

  if (errorStatus[err.message]) {
    return res
      .status(err.code)
      .json({ message: errorStatus[err.message].message });
  }
  if (err.message) {
    return res.status(err.code || 500).send({ message: err.message });
  }

  const { code, message } = errorStatus[err.error];

  res.status(code).json({ message });
};
