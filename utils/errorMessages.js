const DISPLAY_NAME = { message: '"displayName" length must be at least 8 characters long' };
const EMAIL = { message: '"email" must be a valid email' };
const EMAIL_REQ = { message: '"email" is required' };
const PASSWORD = { message: '"password" length must be 6 characters long' };
const PASSWORD_REQ = { message: '"password" is required' };
const USER = { message: '"user" already registered' };
const USER_CONFLICT = { message: 'User already registered' };
const EMAIL_EMPTY = { message: '"email" is not allowed to be empty' };
const PASSWORD_EMPTY = { message: '"password" is not allowed to be empty' };
const INVALID_FIELDS = { message: 'Invalid fields' };
const TOKEN_NOT_FOUND = { message: 'Token not found' };
const INVALID_TOKEN = { message: 'Expired or invalid token' };
const USER_EXISTS = { message: 'User does not exist' };
const NAME_REQ = { message: '"name" is required' };
const TITLE_REQ = { message: '"title" is required' };
const CONTENT_REQ = { message: '"content" is required' };
const CATEGORY_REQ = { message: '"categoryIds" is required' };
const CATEGORY_ID_NOT_FOUND = { message: '"categoryIds" not found' };
const POST_EXISTS = { message: 'Post does not exist' };
const CATEGORY_EDITED = { message: 'Categories cannot be edited' };
const USER_ALLOWED = { message: 'Unauthorized user' };

module.exports = {
  DISPLAY_NAME,
  EMAIL,
  EMAIL_REQ,
  PASSWORD,
  PASSWORD_REQ,
  USER,
  USER_CONFLICT,
  EMAIL_EMPTY,
  PASSWORD_EMPTY,
  INVALID_FIELDS,
  TOKEN_NOT_FOUND,
  INVALID_TOKEN,
  USER_EXISTS,
  NAME_REQ,
  TITLE_REQ,
  CONTENT_REQ,
  CATEGORY_REQ,
  CATEGORY_ID_NOT_FOUND,
  POST_EXISTS,
  CATEGORY_EDITED,
  USER_ALLOWED,
};
