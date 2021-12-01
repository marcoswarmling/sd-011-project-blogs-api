const { validDisplayName } = require('./UserFields/displayName');
const { validEmail } = require('./UserFields/email');
const { validPassword } = require('./UserFields/password');
const { validName } = require('./UserFields/name');

const { validTitle } = require('./BlogPosts/title');
const { validContent } = require('./BlogPosts/content');
const { validCategoryIds } = require('./BlogPosts/categoryId');

const validationFunctions = {
  displayName: validDisplayName,
  email: validEmail,
  password: validPassword,
  name: validName,
  title: validTitle,
  content: validContent,
  categoryIds: validCategoryIds,
};

const endpointsValidation = {
  user: ['displayName', 'email', 'password'],
  login: ['email', 'password'],
  categories: ['name'],
  post: ['title', 'content', 'categoryIds'],
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