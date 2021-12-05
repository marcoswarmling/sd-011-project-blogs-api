const Joi = require('joi');

// Olhei o repositorio para me ajudar nas validações https://github.com/tryber/sd-011-project-blogs-api/tree/erick-marinho-blogs-api

const validaLogin = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().not().empty().required(),
    password: Joi.string().not().empty().required(),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  validaLogin,
};