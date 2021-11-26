const errorDictionary = require('../utils');

module.exports = (err, _req, res, _next) => {
  if (err.statusCode) {
    const { status, message } = errorDictionary[err.statusCode];
    return res.status(status).json({ message });
  }
  console.error(err, 'errinho meu');

  return res.status(500).json({
    error: {
      message: `Internal server error: ${err.message}`,
    },
  });
};