const router = require('express').Router();
const userController = require('../controllers/userController');
const { paramsValidation } = require('../validation/validateUser');

router.post('/', paramsValidation, userController.createUser);

module.exports = router;