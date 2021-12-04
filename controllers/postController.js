const postService = require('../services/postService');

async function postCreate(req, res) {
  const { body } = req;
  const { token } = req;
  const post = await postService.postCreate(body, token);

  return res.status(201).json(post);
}

module.exports = {
  postCreate,
};
