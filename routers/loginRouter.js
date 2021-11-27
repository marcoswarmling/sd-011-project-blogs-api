const express = require('express');

const router = express.Router();

const { loginUser } = require('../controllers/loginControllers');
const { isValidLoginUser } = require('../middlewares/validations');

router.post('/', isValidLoginUser, loginUser);

module.exports = router;
