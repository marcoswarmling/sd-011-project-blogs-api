const PostServices = require('../services/postServices');

const createPost = async (req, res) => {
  const { title, content, categoryIds, userInfo } = req.body;
  const addResponse = await PostServices.createPost(title, content, categoryIds, userInfo.id);
  if (addResponse.type === 'error') {
    return res.status(addResponse.code).json({ message: addResponse.message });
  }
  return res.status(201).json(addResponse.payload);
};

const getAll = async (_req, res) => {
  const getAllResponse = await PostServices.getAll();
  return res.status(200).json(getAllResponse.payload);
};

module.exports = {
  createPost,
  getAll,
};