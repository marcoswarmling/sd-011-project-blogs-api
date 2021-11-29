// @ts-nocheck
require('dotenv').config();

const rescue = require('express-rescue');
const Sequelize = require('sequelize');
const { BlogPost, Category, PostsCategory, User } = require('../models');
const config = require('../config/config');
const { postSchema, updatePostSchema } = require('../validators');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const errorHappened = { message: 'Ocorreu um erro' };
const unauthorizedUser = { message: 'Unauthorized user' };

const getAll = async (req, res) => {
  try {
    const posts = await BlogPost.findAll({
      attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'displayName', 'email', 'image'],
        },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json(errorHappened);
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { error } = postSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message }); 
    categoryIds.forEach(async (categoryId) => {
    const category = await Category.findByPk(categoryId);
    if (!category) return res.status(400).json({ message: '"categoryIds" not found' }); 
});
    const post = await BlogPost.create(
      { title, content, userId: req.data.id, published: Date.now(), updated: Date.now() },
);
    categoryIds.forEach(async (categoryId) => {
    await PostsCategory.create({ categoryId, postId: post.id });
    }); return res.status(201).json(post);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json(errorHappened);
  }
};

const getPostsByQuery = async (req, res) => {
  const posts = await BlogPost.findAll({
    where: {
      [Sequelize.Op.or]: [
        { title: { [Sequelize.Op.like]: `%${req.query.q}%` } },
        { content: { [Sequelize.Op.like]: `%${req.query.q}%` } },
      ] },
    attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return res.status(200).json(posts);
};

const findPost = async (req, res) => {
  const post = await BlogPost.findOne({
    where: { id: req.params.id },
    attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(post);
};

const getPostById = async (req, res) => {
  try {
    if (req.query.q) {
    return getPostsByQuery(req, res);
    }
    if (Object.keys(req.query).length > 0 && !req.query.q) {
      return getAll(req, res);
    }
    return findPost(req, res);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json(errorHappened);
  }
};

const date = { published: Date.now(), updated: Date.now() };

const updatePost = rescue(async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { error } = updatePostSchema.validate(req.body);
    if (error) return next({ code: 400, message: error.details[0].message });
    const post = await BlogPost.findOne({ where: { id: req.params.id },
    attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
    include: { model: Category, as: 'categories', through: { attributes: [] } } });
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    if (post.userId !== req.data.id) return res.status(401).json(unauthorizedUser);   
    await sequelize.transaction(async (t) => {
    const updatedPost = await post.update({ ...post, title, content, ...date },
    { transaction: t }); return res.status(200).json(updatedPost);
    });
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
