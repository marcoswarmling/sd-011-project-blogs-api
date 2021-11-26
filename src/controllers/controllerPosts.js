const servicesPosts = require('../services/servicesPosts');

const createPost = async (req, res) => {
  const newCategorie = await servicesPosts.createPost({ ...req.body, userId: req.userId });
  if (newCategorie.message) {
    return res.status(201).json({ message: newCategorie.message });
  }
  return res.status(201).json(newCategorie);
};

module.exports = {
  createPost,
};
