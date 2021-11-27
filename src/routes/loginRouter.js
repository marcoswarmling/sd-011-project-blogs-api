const express = require('express');
const user = require('../controllers/userController');

const router = express.Router();
router.use(express.json());

router.post('/', user.login);

module.exports = router;