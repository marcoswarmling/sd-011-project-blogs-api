const userErrors = (err, _req, res, _next) => {
  const { message } = err;
  const status = message === 'User already registered' ? 409 : 400;
  res.status(status).json({ message });
};

module.exports = {
  userErrors,
};