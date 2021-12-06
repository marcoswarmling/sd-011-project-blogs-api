require('dotenv').config();
const jwt = require('jsonwebtoken');
const service = require('../services/postService');
const { getByEmail } = require('../services/userService');

const create = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const { title, categoryIds, content } = req.body;
    
    const verifyCatId = await service.verifyCategory(categoryIds);
    if (!verifyCatId) return res.status(400).json({ message: '"categoryIds" not found' });

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const { user } = await getByEmail(payload.email);

    const response = await service.create({ title, content, categoryIds, userId: user.id });
    return res.status(201).json(response);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAll = async (req, res) => {
  const response = await service.getAll();
  if (!response) return res.status(200).json([]);
  if (response.message) return res.status(500).json(response);

  // console.log('response', response);
  
  return res.status(200).json(response);
};

module.exports = { create, getAll };
