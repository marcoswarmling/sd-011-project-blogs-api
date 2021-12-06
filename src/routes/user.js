const router = require('express').Router();

const userController = require('../controllers/userController');

const middleware = require('../middlewares/validations');

router.post('/', middleware.emailExists, middleware.validateEmail, middleware.passwordExists,  
middleware.validPassword,
middleware.checkDisplayName,
middleware.checkUniqueUser,
 userController.userCreate);

module.exports = router;