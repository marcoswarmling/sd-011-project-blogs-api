const rescue = require('express-rescue');
const service = require('../services/postService');

const createPost = rescue(async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req.user;

  console.log(categoryIds);

  const result = await service.createPost(categoryIds, { userId, title, content });

  return result.code
    ? next(result)
    : res.status(201).json(result);
});

module.exports = {
  createPost,
};