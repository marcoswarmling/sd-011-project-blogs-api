const jwt = require('jsonwebtoken');

const { Categories, BlogPosts, Users } = require('../models');

const isTokenValid = (auth) => {
  const validToken = jwt.verify(auth, 'secret', (error, decoded) => {
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

  const auth = req.headers.authorization;
  const checkCategories = await checkCategoriesIds(categoryIds);
  if (!auth) return res.status(401).json({ message: 'Token not found' });
  if (!checkCategories) return res.status(400).json({ message: '"categoryIds" not found' });

  const validToken = isTokenValid(auth);
  if (!validToken) return res.status(401).json({ message: 'Expired or invalid token' });

  try {
    const { userId } = validToken;
    const createdPost = await BlogPosts.create({ title, content, userId, categoryIds });

    return res.status(201).json(createdPost);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const listPosts = async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'Token not found' });

  const validToken = isTokenValid(auth);
  if (!validToken) return res.status(401).json({ message: 'Expired or invalid token' });

  try {
    const posts = await BlogPosts.findAll({
      include: [
        { model: Users, as: 'user' },
        { model: Categories, as: 'categories' },
      ],
    });
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = {
  createPost,
  listPosts,
};