const Sequelize = require('sequelize');
const { BlogPost, User, Category } = require('../models');
const config = require('../config/config');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const unauthorizedUser = { message: 'Unauthorized user' };
const date = { published: Date.now(), updated: Date.now() };

const getAll = async () => {
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
  return posts;
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const post = await BlogPost.findOne({
    where: { id },
    attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
    include: { model: Category, as: 'categories', through: { attributes: [] } },
  });
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  if (post.userId !== req.data.id) {
    return res.status(401).json(unauthorizedUser);
  }
  await sequelize.transaction(async (t) => {
    const updatedPost = await post.update(
      { ...post, title, content, ...date },
      { transaction: t },
    );
    return res.status(200).json(updatedPost);
  });
};

const getPostById = async (req, res) => {
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

const getPostsByQuery = async (req, res) => {
  const posts = await BlogPost.findAll({
    where: {
      [Sequelize.Op.or]: [
        { title: { [Sequelize.Op.like]: `%${req.query.q}%` } },
        { content: { [Sequelize.Op.like]: `%${req.query.q}%` } },
      ],
    },
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

const createPost = async (req) => {
  const { title, content } = req.body;
  const post = await BlogPost.create({
    title,
    content,
    userId: req.data.id,
    published: Date.now(),
    updated: Date.now(),
  });

  return post;
};

module.exports = {
  getAll,
  updatePost,
  getPostById,
  getPostsByQuery,
  createPost,
};
