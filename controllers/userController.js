const express = require('express');
const { valUser, valToken } = require('../middlewares/valUser');
const { createUser, getAll } = require('../services/userServices');

const router = express.Router();

router.post('/user', valUser, async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await createUser(displayName, email, password, image);

 /*  console.log('ESSE É O MEU TOKEN', token); */
  res.status(201).json(token);
});

router.get('/user', valToken, async (_req, res) => {
  const response = await getAll();
  console.log('ESSE É O MEU RESPONSE DO CONTROLLER', response);
  res.status(200).json(response);
});

module.exports = router;