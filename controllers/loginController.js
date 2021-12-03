const express = require('express');
const { valLogin } = require('../middlewares/valLogin');
const { loginUser } = require('../services/loginServices');

const router = express.Router();

router.post('/login', valLogin, async (req, res) => {
  const { email, password } = req.body;

  const token = await loginUser(email, password);

 /*  console.log('ESSE É O MEU TOKEN DO LOGIN', { token });  */
  res.status(200).json({ token });
});

module.exports = router;
