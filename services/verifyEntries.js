const Joi = require('joi');

function passwordLength(password) {
if (password.length !== 6) return false;

return true;
}

function displayNameLength(displayName) {
  if (displayName.length < 8) return false;
    
  return true;
}

function isEmail(email) {
  const schema = Joi.string().email();
  const { error } = schema.validate(email);
  if (error) return false;

  return true;
}

function entryNotEmpty(entry) {
  if (entry === '') return false;

  return true;
}

function entryExists(entry) {
  return entry !== undefined && entry !== null;
}
module.exports = {
  passwordLength,
  displayNameLength,
  isEmail,
  entryNotEmpty,
  entryExists,
};