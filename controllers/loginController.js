const express = require('express');
const { Users } = require('../models');
const { entriesExists, entriesNotEmpty } = require('../middlewares/validateEntries');
const { createToken } = require('../auth/authentication');

const router = express.Router();

router.post('/',
  entriesExists,
  entriesNotEmpty,
  async (req, res) => {
    try {
      const { email } = req.body;

      const data = await Users.findOne({
        where: {
          email,
        },
      });

      const token = createToken(data.dataValues);
      return res.status(200).json({ token });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: 'Invalid fields' });
    }
  });

module.exports = router;