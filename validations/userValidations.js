function displayNameValidation(displayName) {
  if (!displayName || displayName.length < 8) {
    return false;
  }
  return true;
}

function emailValidation(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

function passwordValidation(password) {
  if (!password) {
    return { error: { message: '"password" is required' } };
  }
  if (password.length < 6) {
    return { error: { message: '"password" lenght must be 6 characters long' } };
  }
  return true;
}

function validateUserCreation(displayName, email, password) {
  const passTest = passwordValidation(password);
  if (!displayNameValidation(displayName)) {
    return { error: { message: '"displayName" lenght must be at least 8 characters long' } };
  }
  if (!email) {
    return { error: { message: '"email" is required' } };
  }
  if (!emailValidation(email)) {
    return { error: { message: '"email" must be a valid email' } };
  }
  if (passTest !== true) {
    return passTest;
  }
  return true;
}

module.exports = { validateUserCreation };