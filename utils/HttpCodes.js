const HTTP_STATUS = {
  code: {
    BAD_REQUEST: 400,
    CONFLICT: 409,
    CREATED: 201,
    INTERNAL_SERVER_ERROR: 500,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    OK: 200,
    UNAUTHORIZED: 401,
  },
  EMAIL_ALREADY_EXIST: { message: 'User already registered' },
  EMAIL_REQUIRED: { message: '"email" is required' },
  EMAIL_NOT_ALLOWED: { message: '"email" is not allowed to be empty' },
  INCORRECT_INFOS: { message: 'Incorrect username or password' },
  INTERNAL_SERVER_ERROR: { message: 'Internal Server Error.' },
  INVALID_DISPLAY_NAME: { message: '"displayName" length must be at least 8 characters long' },
  INVALID_PASSWORD: { message: '"password" length must be 6 characters long' },
  INVALID_EMAIL: { message: '"email" must be a valid email' },
  INVALID_TOKEN: { message: 'jwt malformed' },
  PASSWORD_REQUIRED: { message: '"password" is required' },
  PASSWORD_NOT_ALLOWED: { message: 'password is not allowed to be empty' },
  MISSING_TOKEN: { message: 'missing auth token' },
};

module.exports = HTTP_STATUS;
