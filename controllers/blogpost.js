const Service = require('../services/blogpost');

const createPost = async (req, res) => {
  const data = req.body;

  const userId = req.userData.user_id;

  const result = await Service.createPost(data, userId);

  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }

   return res.status(201).json(result);
};

module.exports = {
  createPost,
};