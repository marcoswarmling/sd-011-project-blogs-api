const router = require('express').Router();
const userController = require('../controllers/userController');
const validateJWT = require('../auth/validateJWT');
const { paramsValidation } = require('../validation/validateUser');

router.post('/', paramsValidation, userController.createUser);
router.get('/', validateJWT, userController.getAllUsers);

module.exports = router;