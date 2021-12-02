const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { Categories } = require('../models');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const checkPost = async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.required(),
  }).validate(req.body);

  if (error) return res.status(400).json({ message: error.message });

  next();
};

const categoryExists = async (req, res, next) => {
  const { categoryIds } = req.body;

  const result = await Categories.findAll();
  const resultId = result.map((item) => item.dataValues.id);
  const resultFinal = resultId.find((item, index) => item === categoryIds[index]);

  if (!resultFinal) return res.status(400).json({ message: '"categoryIds" not found' });

  next();
};

const authorizationTokenPost = async (req, res) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Token not found' });

  const { data: { id } } = jwt.verify(token, secret, (err) => {
    if (err) return res.status(401).json({ message: 'Expired or invalid token' });
    return id;
  });
};

module.exports = { checkPost, authorizationTokenPost, categoryExists };