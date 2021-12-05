const express = require('express');

const router = express.Router();
const Controller = require('../controllers/Post');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, (req, res, next) => {
  Controller.create({ ...req.body, userId: res.locals.userId })
    .then((createdPost) => {
      res.status(201).json(createdPost);
    })
    .catch(next);
});

router.get('/', validateToken, (_req, res, next) => {
  Controller.getAll()
    .then((allPosts) => {
      res.status(200).json(allPosts);
    })
    .catch(next);
});

router.get('/:id', validateToken, (req, res, next) => {
  Controller.getById(req.params.id)
    .then((post) => {
      res.status(200).json(post);
    })
    .catch(next);
});

router.put('/:id', validateToken, (req, res, next) => {
  Controller.editById({
    id: req.params.id,
    userId: res.locals.userId,
    newContentInput: req.body,
  })
    .then((editedPost) => {
      res.status(200).json(editedPost);
    })
    .catch(next);
});

router.delete('/:id', validateToken, (req, res, next) => {
  res.status(200).end();
});

module.exports = router;
