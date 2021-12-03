const { postError } = require('../utils/errorSchema');

module.exports = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title) return next(postError.requiredTitle);
  if (!content) return next(postError.requiredContent);
  if (!categoryIds) return next(postError.requiredCategoryIds);

  return next();
};
