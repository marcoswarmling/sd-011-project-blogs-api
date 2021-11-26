const PostServices = require('../services/categoryServices');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const addResponse = await PostServices.createPost(title, content, categoryIds);
  if (addResponse.type === 'error') {
    return res.status(addResponse.code).json({ message: addResponse.message });
  }
  return res.status(201).json(addResponse.payload);
};

module.exports = {
  createPost,
};