const { BlogPost } = require('../models');

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const { user } = req;
  const userId = user.payload.id;

  const { dataValues } = await BlogPost.create({ title, content, userId });

  return res.status(201).json(dataValues);
};

module.exports = {
  createPost,
};
