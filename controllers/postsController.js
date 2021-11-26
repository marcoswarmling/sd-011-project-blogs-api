const jwt = require('jsonwebtoken');
// const Sequelize = require('sequelize');
// const config = require('../config/config');

// const sequelize = new Sequelize(config.development);

const { BlogPosts, Categories, PostCategories } = require('../models');

const validateToken = (authHeader) => {
  const validToken = jwt.verify(authHeader, process.env.JWT_SECRET, (error, decoded) => {
    if (error) return null;

    return decoded;
  });

  return validToken;
};

const checkCategoriesIds = async (categoryIds) => {
  const categories = await Categories.findAll();

  if (!categoryIds.every((category) => categories.some((c) => c.id === category))) return false;

  return true;
};

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const authHeader = req.headers.authorization;
  const checkedCategories = await checkCategoriesIds(categoryIds);
  if (!authHeader) return res.status(401).json({ message: 'Token not found' });
  if (!checkedCategories) return res.status(400).json({ message: '"categoryIds" not found' });

  const validToken = validateToken(authHeader);
  if (!validToken) return res.status(401).json({ message: 'Expired or invalid token' });

  try {
    const { userId } = validToken;
    const createdPost = await BlogPosts
      .create({ title, content, userId, categoryIds });

    await categoryIds.forEach(async (categoryId) => {
      await PostCategories.create({ postId: createdPost.dataValues.id, categoryId });
    });
    return res.status(201).json(createdPost);
  } catch (err) {
    return res.status(400).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createPost,
};