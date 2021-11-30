const Sequelize = require('sequelize');

const postService = require('../services/postService');
const config = require('../config/config');
require('dotenv').config();

const sequelize = new Sequelize(config.development);

const createPost = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const { body, user } = req;

    const response = await postService.createPost(body, user, t);

    await t.commit();

    res.status(201).json(response);
  } catch (error) {
    await t.rollback();
    console.log(error);
    next(error);
  }
};

const getAllPosts = async (_req, res, next) => {
  try {
    const posts = await postService.getAllPosts();

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await postService.getPostById(id);

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { body, user } = req;
    const { id } = req.params;

    const post = await postService.updatePost(body, user, id);

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user } = req;

    await postService.deletePost(id, user);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};