const router = require('express').Router();
const userController = require('../controllers/Users');
const validationJoi = require('../validationJoi');

router.post('/', validationJoi, userController.create);

module.exports = router;