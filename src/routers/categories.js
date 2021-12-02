const express = require('express');

const router = express.Router();
const Controller = require('../controllers/Category');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, (req, res, next) => {
  res.status(201).end();
  // Controller.create(req.body)
  //   .then(({ token }) => {
  //     res.status(201).json({ token });
  //   })
  //   .catch(next);
});

module.exports = router;
