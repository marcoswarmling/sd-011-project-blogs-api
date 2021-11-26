const express = require('express');
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const validateJWT = require('../middlewares/validateJWT');

const router = express.Router();

const secret = 'segredo';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

router.post('/', async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await userService.create({ displayName, email, password, image });

  if (response && response.message === 'User already registered') {
    return res.status(409).json(response);
  }

  if (response && response.message) {
    return res.status(400).json(response);
  }

  const { id, email: userEmail } = response;

  const token = jwt.sign({ id, userEmail }, secret, jwtConfig);

  return res.status(201).json(token);
});

router.get('/', validateJWT, async (req, res) => {
  const response = await userService.getAll();
  return res.status(200).json(response);
});

router.get('/:id', validateJWT, async (req, res) => {
  const { id } = req.params;
  const response = await userService.getById(id);

  if (!response) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(response);
});

module.exports = router;