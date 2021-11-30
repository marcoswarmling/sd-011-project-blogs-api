const { registerPost } = require('../services/post');

const insertNewPost = async (req, res) => {
  const {
    title,
    content,
  } = req.body;
  const { user } = req;

  const newPost = await registerPost(title, user, content);

  return res.status(201).json(newPost);
};

module.exports = {
  insertNewPost,
};
