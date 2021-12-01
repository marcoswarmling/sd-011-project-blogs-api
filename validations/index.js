const { validDisplayName } = require('./displayName');
const { validEmail } = require('./email');
const { validPassword } = require('./password');
const { validName } = require('./name');
const { validTitle } = require('./title');

const validationFunctions = {
  displayName: validDisplayName,
  email: validEmail,
  password: validPassword,
  name: validName,
  title: validTitle,
};

const endpointsValidation = {
  user: ['displayName', 'email', 'password'],
  login: ['email', 'password'],
  categories: ['name'],
  post: ['title'],
};

const validationFields = (req, res, next) => {
  // Pega URL do endpoint, ex: user, login
  const endpoint = req.originalUrl.split('/')[1];
  const fields = endpointsValidation[endpoint];

  const errors = fields.map((field) => {
    if (validationFunctions[field]) return validationFunctions[field](req, res);

    return false;
  });

  const err = errors.find((error) => error !== undefined);
  if (err) return res.status(400).json(err);

  next();
};

module.exports = {
  validationFields,
};