const DICIONARY_ERROR = require('../utils');

module.exports = (err, _req, res, _next) => {
  console.log('Rodou erro global com -->', err.mensage);
  const { status, message } = DICIONARY_ERROR[err.message] || DICIONARY_ERROR.default;

  return res.status(status).json({ message });
};
