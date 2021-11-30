const checkEmail = async (email) => {
  if (email === '') {
    return { code: 400, message: '"email" is not allowed to be empty' };
  }
  if (!email || typeof email !== 'string') {
    return { code: 400, message: '"email" is required' };
  }
  return null;
};

const checkPassword = (password) => {
  if (password === '') {
    return { code: 400, message: '"password" is not allowed to be empty' };
  }
  if (!password || typeof password !== 'string') {
    return { code: 400, message: '"password" is required' };
  }
  return null;
};

module.exports = async ({ email, password }) => {
  if (checkPassword(password)) return checkPassword(password);
  if (checkEmail(email)) return checkEmail(email);
  return null;
};