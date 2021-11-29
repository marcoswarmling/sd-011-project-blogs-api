/* eslint-disable max-lines-per-function */
// @ts-nocheck
// require('dotenv').config();

const rescue = require('express-rescue');
const Sequelize = require('sequelize');
const { BlogPost, Category, PostsCategory } = require('../models');
const config = require('../config/config');
const { postSchema, updatePostSchema } = require('../validators');
const postService = require('../services/blogPostService');
const categoryService = require('../services/categoryService');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const errorHappened = { message: 'Ocorreu um erro' };

const getAll = async (req, res) => {
  try {
    const posts = await postService.getAll();
    return res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json(errorHappened);
  }
};

const createPost = rescue(async (req, res, next) => {
  try {
    const { categoryIds } = req.body;
    const { error } = postSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const checkCategories = await categoryService.checkCategories(categoryIds);
    if (!checkCategories) return next('CategoryNotFound');
    const post = await postService.createPost(req);

    await categoryService.createPostCategories({ id: post.id, categoryIds });

    return res.status(201).json(post);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json(errorHappened);
  }
});

const getPostById = async (req, res) => {
  try {
    if (req.query.q) {
      return postService.getPostsByQuery(req, res);
    }
    if (Object.keys(req.query).length > 0 && !req.query.q) {
      return getAll(req, res);
    }
    return postService.getPostById(req, res);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json(errorHappened);
  }
};

const updatePost = rescue(async (req, res, next) => {
  try {
    const { error } = updatePostSchema.validate(req.body);
    if (error) return next({ code: 400, message: error.details[0].message });
    return postService.updatePost(req, res);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

const deletePost = rescue(async (req, res) => {
  try {
    const post = await BlogPost.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    if (post.userId !== req.data.id) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    await sequelize.transaction(async (t) => {
      await post.destroy({ transaction: t });
      return res.status(204).json();
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

module.exports = {
  createPost,
  getAll,
  getPostById,
  updatePost,
  deletePost,

  // createAdmin,
};
