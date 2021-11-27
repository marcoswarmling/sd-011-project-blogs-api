const express = require('express');

const user = require('../controllers/userController');

const router = express.Router();

router.use(express.json());
router.get('/', user.getAll);
router.post('/', user.createUser);
// userRouter.post('/users', users.createUser);
// userRouter.post('/login', users.login);
router.get('/', (req, res) => {
  res.send('hello');
});

module.exports = router;
