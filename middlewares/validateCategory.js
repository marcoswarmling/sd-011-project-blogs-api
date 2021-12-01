const { categoryError } = require('../utils/errorSchema');

module.exports = (req, _res, next) => {
  const { name } = req.body;

  if (!name) return next(categoryError.requiredName);

  return next();
};
