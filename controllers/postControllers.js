const postServices = require('../services/postServices');
const { SERVER_ERROR } = require('../utils/statusMessage');

const getAllPosts = async (req, res) => {
  try {
    const { q } = req.query;
    const response = await postServices.getAllPost(q);
    return res.status(response.status).json(response.message);
  } catch (e) {
    console.error(e);
    return res.status(SERVER_ERROR).json({ message: `Server Unavailable ${e.message}` });
  }
};

const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await postServices.getOnePost(id);
    return res.status(result.status).json(result.message);
  } catch (e) {
    console.error(e);
    return res.status(SERVER_ERROR).json({ message: `Server Unavailable ${e.message}` });
  }
};

module.exports = {
  getOnePost,
  getAllPosts,
};
