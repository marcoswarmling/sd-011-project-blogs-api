module.exports = (err, _req, res, _next) => {
  const decoder = {
    ER_DUP_ENTRY: { status: 409, message: 'User already registered' },
    INVALID_FIELDS: { status: 400, message: 'Invalid fields' },
    MISSING_TOKEN: { status: 401, message: 'Token not found' },
    INVALID_TOKEN: { status: 401, message: 'Expired or invalid token' },
  };
  let response;
  if (err.parent) response = decoder[err.parent.code];
  else response = decoder[err.message];
  return res.status(response.status || 500)
  .json({ message: response.message || 'internal server error' });
};