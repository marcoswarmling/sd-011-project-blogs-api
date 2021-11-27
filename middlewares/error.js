module.exports = (err, _req, res, _next) => {
  const decoder = {
    ER_DUP_ENTRY: { status: 409, message: 'User already registered' },
    INVALID_FIELDS: {status: 400, message: 'Invalid fields'},
  };

  const response = decoder[err.parent.code];
  return res.status(response.status).json({ message: response.message });
};