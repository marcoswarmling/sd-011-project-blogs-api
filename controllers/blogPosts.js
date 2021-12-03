const postServices = require('../services/blogPosts');
const { status, intServerError } = require('../Helpers/status&messages');

const createPost = async (req, res) => {
try {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const newPost = await postServices.createPost(title, content, categoryIds, id);
  if (newPost.status) {
    return res.status(newPost.status).json({ message: newPost.message });
  }
  return res.status(status.create).json(newPost);
} catch (error) {
  return res.status(status.intServerError).json({ message: intServerError.unknown });
}
};

const getAllPosts = async (_req, res) => {
try {
  const allPosts = await postServices.getAllPosts();
  return res.status(status.sucess).json(allPosts);
} catch (error) {
  return res.status(status.intServerError).json({ message: intServerError.unknown });
}
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const postById = await postServices.getById(id);
    if (postById.status) {
      return res.status(postById.status).json({ message: postById.message });
    }
    return res.status(200).json(postById);
  } catch (error) {
    return res.status(status.intServerError).json({ message: intServerError.unknown });
  }
};

const editPost = async (req, res) => {
try {
  const { id: postId } = req.params;
  const { title, content } = req.body;

  const updatedPost = await postServices.editPost(title, content, postId);
  return res.status(status.sucess).json(updatedPost);
} catch (error) {
  return res.status(status.intServerError).json({ message: intServerError.unknown });
}
};

module.exports = { createPost, getAllPosts, getById, editPost };
