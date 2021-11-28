const displayName = {
  status: 400,
  message: '"displayName" length must be at least 8 characters long',
};

const email = {
  status: 400,
  message: '"email" must be a valid email',
};

const emptyEmail = {
  status: 400,
  message: '"email" is required',
};

const password = {
  status: 400,
  message: '"password" length must be 6 characters long',
};

const emptyPassword = {
  status: 400,
  message: '"password" is required',
};

module.exports = {
  displayName,
  email,
  emptyEmail,
  password,
  emptyPassword,
};
