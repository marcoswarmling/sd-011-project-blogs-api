const joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/postService');

const postRegister = rescue(async (req, res, next) => {
  const { error } = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
    categoryIds: joi.array().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { email } = req.user;
  const { title, content, categoryIds } = req.body;

  const post = { title, content, categoryIds };

  const result = await service.postRegister(post, email);
  if (result.error) return next(result.error);
  return res.status(201).json(result);
});

const getAllPosts = rescue(async (_req, res, _next) => {
  const result = await service.getAllPosts();
  return res.status(200).json(result);
});

const getPostById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const result = await service.getPostById(id);
  if (result.error) return next(result.error);
  return res.status(200).json(result);
});

const updatePost = rescue(async (req, res, next) => {
  const { error } = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { id } = req.params;
  const { title, content } = req.body;
  const post = { id, title, content };
  const { email } = req.user;
  const result = await service.updatePost(post, email);
  if (result.error) return next(result.error);
  return res.status(200).json(result);
});

module.exports = {
  postRegister,
  getAllPosts,
  getPostById,
  updatePost,
};
