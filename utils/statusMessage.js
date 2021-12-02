// --- 200 --- //

const STATUS_OK = 200;
const CREATED = 201;
const NO_CONTENT = 204;

// --- 400 ---//

const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const CONFLICT = 409;
// --- 500 --- //

const SERVER_ERROR = 500;

// --- mensage ----/ 

const UserAlreadyRegistered = 'User already registered';

module.exports = {
  STATUS_OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT,
  SERVER_ERROR,
  UserAlreadyRegistered,
};
