const { validate } = require('validate.js');
const DefaultError = require('../errors/DefaultError');

const verifyFields = (fields, rules) => {
  const verify = validate(fields, rules);

  if (verify) {
    const [[errorMessage]] = Object.values(verify);
    throw new DefaultError(errorMessage);
  }

  return true;
};

module.exports = verifyFields;