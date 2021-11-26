const validateEmailExists = (email) => {
  if (!email) {
    return { message: '"email" is required' };
  }  
  return null;
};

const validatePasswordExists = (password) => {
  if (!password) {
    return { message: '"password" is required' };
  }
  return null;
};

const validateEmailFormat = (email) => {
  const emailPattern = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;
  // para verificação de email abaixo: Source: https://forum.blip.ai/t/resolvido-regex-para-validacao-de-email/1635

  if (!emailPattern.test(email)) {
    return { message: '"email" must be a valid email' };
  }  
  return null;
};

const validatePasswordLength = (password) => {
  if (password.length !== 6) {
    return { message: '"password" length must be 6 characters long' };
  }
  return null;
};

const validateDisplayNameLength = (displayName) => {
  if (displayName.length < 8) {
    return { message: '"displayName" length must be at least 8 characters long' };
  }
  return null;
};

const validateEmptyPassword = (password) => {
  if (password === '') {
    return { message: '"password" is not allowed to be empty' };
  }
  return null;
};

const validateEmptyEmail = (email) => {
  if (email === '') {
    return { message: '"email" is not allowed to be empty' };
  }
  return null;
};

module.exports = {
  validateEmailExists,
  validateDisplayNameLength,
  validatePasswordLength,
  validateEmailFormat,
  validatePasswordExists,
  validateEmptyPassword,
  validateEmptyEmail,
};
