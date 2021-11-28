const express = require('express');
const category = require('../controllers/categoryController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.use(express.json());
router.get('/', auth, category.getAll);
router.post('/', auth, category.createCategory);
// router.get('/:id', auth, user.getUserById);

router.get('/', (req, res) => {
  res.send('hello');
});

module.exports = router;
