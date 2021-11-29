const displayName = {
  status: 400,
  message: '"displayName" length must be at least 8 characters long',
};

const email = {
  status: 400,
  message: '"email" must be a valid email',
};

const requiredEmail = {
  status: 400,
  message: '"email" is required',
};

const password = {
  status: 400,
  message: '"password" length must be 6 characters long',
};

const requiredPassword = {
  status: 400,
  message: '"password" is required',
};

const emptyEmail = {
    status: 400,
    message: '"email" is not allowed to be empty', 
};

const emptyPassword = {
  status: 400,
  message: '"password" is not allowed to be empty', 
};

module.exports = {
  displayName,
  email,
  requiredEmail,
  password,
  requiredPassword,
  emptyEmail,
  emptyPassword,
};
