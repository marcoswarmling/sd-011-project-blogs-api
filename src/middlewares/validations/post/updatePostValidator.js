const errors = require('../../../schemas/errorsSchema');
const { validateUpdatePostAttributes } = require('../../../helpers/postHelper');

module.exports = (request, response, next) => {
  const { title, content, categoryIds } = request.body;

  if (categoryIds) return next(errors.post.categoryUpdate);

  try {
    validateUpdatePostAttributes({ title, content });
  } catch (error) {
    return next(error);
  }

  return next();
};
