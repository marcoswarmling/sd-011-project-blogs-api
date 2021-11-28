const express = require('express');

const router = express.Router();
const { User } = require('../models');
const createJWT = require('../utils/createJWT');
const validateLoginSchema = require('../middlewares/validateLoginSchema');

router.post('/', validateLoginSchema, async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ where: { email } });
  if (!userExists || userExists.password !== password) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }
  const token = createJWT(userExists.id, email);
  return res.status(200).json({ token });
});

module.exports = router;