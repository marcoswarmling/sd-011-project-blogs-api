const validateDisplayName = (displayName) => {
  if (!displayName || displayName.length < 8) {
    return { err: {
      message: '"displayName" length must be at least 8 characters long',
      code: 400,
    } };
  }

  return null;
};

const validateEmail = (email) => {
  if (!email) {
    return { err: {
      message: '"email" is required',
      code: 400,
    } };
  }

  const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!patternEmail.test(email)) {
    return { err: {
      message: '"email" must be a valid email',
      code: 400,
    } };
  }

  return null;
};

const validatePassword = (password) => {
  if (!password) {
    return { err: {
      message: '"password" is required',
      code: 400,
    } };
  }

  if (password.length < 6) {
    return { err: {
      message: '"password" length must be 6 characters long',
      code: 400,
    } };
  }

  return null;
};

const validateImage = (image) => {
  if (!image) {
    return { err: {
      message: '"image" is required',
      code: 400,
    } };
  }

  return null;
};

const createUserValidations = ({ email, password, image, displayName }) => {
  const emailValidation = validateEmail(email);
  if (emailValidation) {
    return emailValidation;
  }
  
  const passwordValidation = validatePassword(password);
  if (passwordValidation) {
    return passwordValidation;
  }
  
  const imageValidation = validateImage(image);
  if (imageValidation) {
    return imageValidation;
  }
  
  const displayNameValidation = validateDisplayName(displayName);
  if (displayNameValidation) {
    return displayNameValidation;
  }

  return null;
};

module.exports = {
  createUserValidations,
};