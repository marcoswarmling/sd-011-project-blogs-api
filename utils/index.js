module.exports = {
  nameIsRequired: {
    message: '"displayName" is required',
    status: 400,
  },
  invalidName: {
    message: '"displayName" length must be at least 8 characters long',
    status: 400,
  },
  emailIsRequired: {
    message: '"email" is required',
    status: 400,
  },
  invalidEmail: {
    message: '"email" must be a valid email',
    status: 400,
  },
  passwordIsRequired: {
    message: '"password" is required',
    status: 400,
  },
  invalidPassword: {
    message: '"password" length must be 6 characters long',
    status: 400,
  },
  userAlreadyRegistered: {
    message: 'User already registered',
    status: 409,
  },
};