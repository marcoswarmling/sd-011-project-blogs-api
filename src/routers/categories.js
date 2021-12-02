const express = require('express');

const router = express.Router();
const Controller = require('../controllers/Category');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, (req, res, next) => {
  Controller.create(req.body)
    .then((createdCategory) => {
      res.status(201).json(createdCategory);
    })
    .catch(next);
});

router.get('/', validateToken, (_req, res, next) => {
  Controller.getAll()
    .then((allCategories) => {
      res.status(200).json(allCategories);
    })
    .catch(next);
});

module.exports = router;
