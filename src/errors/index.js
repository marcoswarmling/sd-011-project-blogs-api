const AuthorizationError = require('./AuthorizationError');
const ConflictError = require('./ConflictError');
const ForbiddenError = require('./ForbiddenError');
const HttpError = require('./HttpError');
const InternalError = require('./InternalError');
const NotFoundError = require('./NotFoundError');
const ValidationError = require('./ValidationError');

module.exports = {
  AuthorizationError,
  ConflictError,
  ForbiddenError,
  HttpError,
  InternalError,
  NotFoundError,
  ValidationError,
};
