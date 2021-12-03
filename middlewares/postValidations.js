const { invalidField } = require('../helpers');

const nullCategory = new Error('nullCategory');
const nullContent = new Error('nullContent');
const nullTitle = new Error('nullTitle');

function passwordValidation(password) {
  if (invalidField(password)) throw nullCategory;

  return true;
}

function contentValidation(content) {
  if (invalidField(content)) throw nullContent;

  return true;
}

function titleValidation(title) {
  if (invalidField(title)) throw nullTitle;

  return true;
}

function postValidation(req, _res, next) {
  const { title, content, password } = req.body;

  titleValidation(title);
  contentValidation(content);
  passwordValidation(password);

  next();
}

module.exports = {
  postValidation,
};
