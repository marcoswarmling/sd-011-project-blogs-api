const express = require('express');

const router = express.Router();
const Controller = require('../controllers/User');
const validateToken = require('../middlewares/validateToken');

router.post('/', (req, res, next) => {
  Controller.create(req.body)
    .then(({ token }) => {
      res.status(201).json({ token });
    })
    .catch(next);
});

router.get('/', validateToken, (_req, res) => {
  Controller.getAll()
    .then((users) => {
      res.status(200).json(users);
      console.log(users);
    });
});

router.get('/:id', validateToken, (req, res) => {
  res.status(200).end();
});

module.exports = router;
