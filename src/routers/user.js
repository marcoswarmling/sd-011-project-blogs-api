const express = require('express');

const router = express.Router();
const Controller = require('../controllers/User');

router.post('/', (req, res, next) => {
  Controller.create(req.body)
    .then(({ token }) => {
      res.status(201).json({ token });
    })
    .catch(next);
});

module.exports = router;
