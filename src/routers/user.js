const express = require('express');

const router = express.Router();
const Controller = require('../controllers/User');

router.post('/user', (req, res) => {
  Controller.createUser(req.body)
    .then(({ token }) => {
      res.status(201).json({ token });
  });
});

module.exports = router;
