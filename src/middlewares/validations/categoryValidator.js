const errors = require('../../schemas/errors');

module.exports = (request, _response, next) => {
  const { name } = request.body;

  if (!name) return next(errors.category.requiredName);

  return next();
};