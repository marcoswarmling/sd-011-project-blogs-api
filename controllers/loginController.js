const express = require('express');
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const router = express.Router();

const secret = 'segredo';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const response = await userService.login(email, password);

  if (response && response.message) {
    return res.status(400).json(response);
  }

  const { id, email: userEmail } = response.dataValues;

  const token = jwt.sign({ id, userEmail }, secret, jwtConfig);
  
  return res.status(200).json({ token });
});

module.exports = router;