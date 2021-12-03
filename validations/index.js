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
  'POST/user': ['displayName', 'email', 'password'],
  'POST/login': ['email', 'password'],
  'POST/categories': ['name'],
  'POST/post': ['title', 'content', 'categoryIds'],
  'PUT/post': ['title', 'content'],
};

const validationFields = (req, res, next) => {
  const endpoint = req.originalUrl.split('/')[1];
  const { method } = req;
  // Gera uma string ex: "POST/user", "GET/post"
  const methodEndpoint = `${method}/${endpoint}`;
  
  const fields = endpointsValidation[methodEndpoint];

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