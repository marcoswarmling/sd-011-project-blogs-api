const { postServices } = require('../services');
const httpCodes = require('../constants/httpCodes.json');

exports.createPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const tryPost = await postServices.createPost({ title, content, userId: id, categoryIds });
    const { published, updated, ...newPost } = tryPost.dataValues;
    return res.status(httpCodes.HTTP_CREATED).json({ ...newPost });
  } catch (error) {
    next(error);
  }
};

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await postServices.getAllPosts();
    return res.status(httpCodes.HTTP_OK).json(posts);
  } catch (error) {
    next(error);
  }
};
