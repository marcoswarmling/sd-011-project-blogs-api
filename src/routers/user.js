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

router.get('/', validateToken, (_req, res, next) => {
  Controller.getAll()
    .then((users) => {
      res.status(200).json(users);
      console.log(users);
    })
    .catch(next);
});

router.delete('/me', validateToken, (_req, res, next) => {
  Controller.deleteById(res.locals.userId)
    .then(() => {
      res.status(204).end();
    })
    .catch(next);
});

router.get('/:id', validateToken, (req, res, next) => {
  Controller.getById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

module.exports = router;
