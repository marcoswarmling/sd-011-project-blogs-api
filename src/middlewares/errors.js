const DICIONARY_ERROR = require('../utils');

module.exports = (err, _req, res, _next) => {
  console.log('Rodoyu erro global com -->', err);
  const { status, message } = DICIONARY_ERROR[err.message] || DICIONARY_ERROR.default;

  return res.status(status).json({ message });
};
