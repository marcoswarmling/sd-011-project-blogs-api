const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'cookmaster';

const jwtConfig = {
  algorithm: 'HS256',
};

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await User.create({ displayName, email, password, image });
    const token = jwt.sign({ data: newUser }, secret, jwtConfig);

    return res.status(201).json(token);
  } catch (e) {
    console.log(e);
    return res.status(409).json({ message: 'User already registered' });
  }
});

module.exports = router;
