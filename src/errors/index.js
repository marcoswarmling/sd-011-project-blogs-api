const Conflicts = require('./conflicts');
const DataInvalid = require('./unprocessableEntity');
const Forbidden = require('./forbidden');
const HttpError = require('./httpError');
const NotFound = require('./notFound');
const ServerError = require('./serverError');
const Unauthorized = require('./unauthorized');

module.exports = {
  Conflicts,
  DataInvalid,
  Forbidden,
  HttpError,
  NotFound,
  ServerError,
  Unauthorized,
};
