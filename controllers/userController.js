const express = require('express');
const { valUser } = require('../middlewares/valUser');
const { createUser } = require('../services/userServices');

const router = express.Router();

router.post('/user', valUser, async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const response = await createUser(displayName, email, password, image);
  res.status(201).json(response);
});