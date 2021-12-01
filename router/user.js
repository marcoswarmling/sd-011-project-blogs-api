const express = require('express');
const userController = require('../controllers/Users');
const { newUserValidations } = require('../middlewares');

const router = express.Router();

router.post('/', newUserValidations, userController.create);

module.exports = router;
