const validateDisplayName = (displayName) => {
  if (!displayName || displayName.length < 8) {
    return { code: 400, message: '"displayName" length must be at least 8 characters long' };
  }
  return null;
};

const validateEmail = (email) => {
  const validRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
  );

  if (!email) return { code: 400, message: '"email" is required' };

  const validEmail = validRegex.test(email);

  if (!validEmail) return { code: 400, message: '"email" must be a valid email' };
  
  return null;
};

const validatePwd = (pwd) => {
  if (!pwd) return { code: 400, message: '"password" is required' };
  if (pwd.length !== 6) {
    return { code: 400, message: '"password" length must be 6 characters long' };
  }
  
  return null;
};

module.exports = {
  validateEmail,
  validateDisplayName,
  validatePwd,
};