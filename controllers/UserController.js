const express = require('express');
const { User } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await User.create({ displayName, email, password, image });

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e);
    return res.status(409).json({ message: 'User already registered' });
  }
});

module.exports = router;
