const { validatePost } = require('../../helpers/postHelper');

module.exports = (request, _response, next) => {
  const post = request.body;

  try {
    validatePost(post);
  } catch (error) {
    return next(error);
  }

  return next();
};