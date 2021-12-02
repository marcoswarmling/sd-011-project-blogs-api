const postServices = require('../services/blogPosts');
const { status, intServerError } = require('../Helpers/status&messages');

const createPost = async (req, res) => {
try {
  console.log('to no contrller');
  const { title, content, categoryIds } = req.body;
  // pegar o id do usuario de req.user (alterar para receber) enviar pro service
  const { id: userId } = req.user;
  const newPost = await postServices.createPost(title, content, categoryIds, userId);
  console.log('newPost em CONTROLLER', newPost);
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
  return res.status(200).json(allPosts);
} catch (error) {
  return res.status(status.intServerError).json({ message: intServerError.unknown });
}
};

module.exports = { createPost, getAllPosts };