const express = require('express');

const router = express.Router();
const UserController = require('../controllers/User');

router.post('/login', (req, res, next) => {
  UserController.login(req.body)
    .then(({ token }) => {
      res.status(200).json({ token });
    })
    .catch(next);
});

module.exports = router;
