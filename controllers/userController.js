const express = require('express');
const { createUser, loginUser, getAll } = require('../services/userService');

const {
  validateUser,
  validateLogin,
  validateToken,
} = require('../middlewares/validateUser');

const router = express.Router();

router.post('/user', validateUser, async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await createUser(displayName, email, password, image);

  res.status(201).json({ token });
});

router.post('/login', validateLogin, async (req, res) => {
  const { email, password } = req.body;

  const token = await loginUser(email, password);

  res.status(200).json({ token });
});

router.get('/user', validateToken, async (_req, res) => {
  const response = await getAll();
  res.status(200).json(response);
});

module.exports = router;
