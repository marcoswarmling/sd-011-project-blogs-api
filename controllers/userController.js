const express = require('express');

const router = express.Router();
const { User } = require('../models');
const validateUserSchema = require('../middlewares/validateUserSchema');
const createJWT = require('../utils/createJWT');

router.post('/', validateUserSchema, async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res.status(409).json({
      message: 'User already registered' });
  }
  try {
    await User.create({
      displayName,
      email,
      password,
      image,
    });
    const token = createJWT(email, password);
    return res.status(201).json({ token });
  } catch (error) {
    res.status(500).send(error);
  }
});

const validateToken = require('../middlewares/validateToken');

router.get('/', validateToken, async (req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
