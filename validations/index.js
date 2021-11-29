const { validDisplayName } = require('./displayName');
const { validEmail } = require('./email');
const { validPassword } = require('./password');

const validationFunctions = {
  displayName: validDisplayName,
  email: validEmail,
  password: validPassword,
};

const endpointsValidation = {
  user: ['displayName', 'email', 'password'],
};

const validationFields = (req, res, next) => {
  // Pega URL do endpoint, ex: user, login
  const endpoint = req.originalUrl.split('/')[1];
  const fields = endpointsValidation[endpoint];

  fields.forEach((field) => {
    // Valida se a função existe
    if (validationFunctions[field]) validationFunctions[field](req, res);
  });

  next();
};

module.exports = {
  validationFields,
};