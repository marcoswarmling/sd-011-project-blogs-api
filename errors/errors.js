const Joi = require('joi');

module.exports = (err, _req, res, _next) => {
  if (Joi.isError(err)) {
    const { message } = err;
    return res.status(400).json({ message });
  }

  res.status(500).json({ message: 'Algo deu errado ai mano' });
};
