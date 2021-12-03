const express = require('express');
const { valUser, valToken } = require('../middlewares/valUser');
const { createUser, getAll, getById } = require('../services/userServices');

const router = express.Router();

router.post('/user', valUser, async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await createUser(displayName, email, password, image);

  /* console.log('ESSE É O MEU TOKEN', { token });  */
  res.status(201).json({ token });
});

router.get('/user', valToken, async (_req, res) => {
  const response = await getAll();
  /* console.log('ESSE É O MEU RESPONSE DO CONTROLLER', response); */
  res.status(200).json(response);
});

router.get('/user/:id', valToken, async (req, res) => {
  const { id } = req.params;
  const user = await getById(id);

  if (user.error) {
    return res.status(404).json({ message: user.error });
  }
  
  /* console.log('ESSE É O MEU CONSOLE LOG USER:ID', user); */
  return res.status(200).json(user);
});

module.exports = router;