const postService = require('../services/postService');

async function createPost(req, res) {
  const { id } = req.user;
  const postObj = req.body;
  console.log('aqui');
  try {
    const result = await postService.createPost(postObj, id);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    const err = JSON.parse(error.message);
    res.status(err.status).json({ message: err.message });
  }
}

module.exports = {
  createPost,
};