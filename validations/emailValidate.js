const { BAD_REQUEST } = require('../utils/statusMessage');

const validateEmail = (email) => {
  const validRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
  );

  if (email === '') return { code: BAD_REQUEST, message: '"email" is not allowed to be empty' };

  if (!email) return { code: BAD_REQUEST, message: '"email" is required' };

  const validEmail = validRegex.test(email);

  if (!validEmail) return { code: BAD_REQUEST, message: '"email" must be a valid email' };
  
  return null;
};

module.exports = validateEmail;
