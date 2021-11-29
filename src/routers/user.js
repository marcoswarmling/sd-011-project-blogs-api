const express = require('express');

const router = express.Router();

const { User } = require('../models');

router.post('/', (req, res) => {
  User.create(req.body)
    .then((createdUser) => {
      console.log(createdUser);
      res.status(201).json({ token: 'tokenubauba' });
    });
});

module.exports = router;
