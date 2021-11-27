const joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/postService');

const postRegister = rescue(async (req, res, next) => {
  const { error } = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
    categoryIds: joi.number().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { email } = req.user;
  const { title, content, categoryIds } = req.body;

  const post = { title, content, categoryIds };

  const result = await service.postRegister(post, email);
  if (result.error) return next(result.error);
  return res.status(201).json(result);
});

module.exports = {
  postRegister,
};
