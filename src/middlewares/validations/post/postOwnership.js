const errors = require('../../../schemas/errorsSchema');
const { getPostBasicInfo } = require('../../../services/postService');

module.exports = async (request, _response, next) => {
  const { user, params } = request;
  const { id } = params;

  const post = await getPostBasicInfo(id);

  if (!post) return next(errors.post.notFound);

  if (post.userId !== user.id) return next(errors.post.unauthorizedUser);

  return next();
};
