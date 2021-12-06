const router = require('express').Router();

const loginController = require('../controllers/loginController');

const middleware = require('../middlewares/validations');

router.post('/', middleware.emailNotEmpty, middleware.emailExists,
middleware.passwordNotEmpty,
 middleware.passwordExists, 
 middleware.checkEmailonDataBase, loginController.loginCreate);

module.exports = router;