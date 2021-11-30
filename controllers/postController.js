const postServices = require('../services');
const { status } = require('../schemas');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  const responseFromValidation = await postServices
    .createPost(title, content, categoryIds, authorization);

  if (responseFromValidation.error) {
    const { message, code } = responseFromValidation.error;
    return res.status(code).json({ message });
  }

  return res.status(status.CREATED).json(responseFromValidation);
};

const getAllPosts = async (req, res) => {
  const { authorization } = req.headers;
  const responseFromValidation = await postServices.getAllPosts(authorization);

  if (responseFromValidation.error) {
    const { message, code } = responseFromValidation.error;
    return res.status(code).json({ message });
  }

  return res.status(status.OK).json(responseFromValidation);
};

module.exports = {
  createPost,
  getAllPosts,
};
