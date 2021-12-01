// const Joi = require('joi');

function passwordLength(password) {
if (password.length !== 6) return false;

return true;
}

function passwordExists(password) {
  if (!password) return false;
  
  return true;
}

function displayNameLength(displayName) {
  if (displayName.length < 8) return false;
    
  return true;
}

function emailExists(email) {
  if (!email) return false;

  return true;
}

function isEmail(email) {
  // const schema = Joi.string().email();
  // const { error } = schema.validate(email);
  // if (error) return false;

  return true;
}
module.exports = {
  passwordExists,
  passwordLength,
  displayNameLength,
  emailExists,
  isEmail,
};