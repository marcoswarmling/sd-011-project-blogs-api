const { validateNewPostAttributes } = require('../../../helpers/postHelper');

module.exports = (request, _response, next) => {
  const post = request.body;

  try {
    validateNewPostAttributes(post);
  } catch (error) {
    return next(error);
  }

  return next();
};
