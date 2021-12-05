const postService = require('../services/postService');

async function postCreate(req, res) {
  const { body } = req;
  const { token } = req;
  const post = await postService.postCreate(body, token);

  return res.status(201).json(post);
}

async function getAllPost(req, res) {
  const post = await postService.getAllPost();

  console.log('Retorno do post controller--->', post);
  return res.status(200).json(post);
}

module.exports = {
  postCreate,
  getAllPost,
};
