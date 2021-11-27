const express = require('express');
const user = require('../controllers/userController');

const router = express.Router();

router.use(express.json());
router.get('/', user.getAll);
router.post('/', user.createUser);
router.post('/login', user.login);

router.get('/', (req, res) => {
  res.send('hello');
});

module.exports = router;
