const express = require('express');
const { valUser } = require('../middlewares/valUser');
const { createUser } = require('../services/userServices');

const router = express.Router();

router.post('/user', valUser, async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await createUser(displayName, email, password, image);

  console.log('ESSE É O MEU TOKEN', token);
  res.status(201).json(token);
});

module.exports = router;