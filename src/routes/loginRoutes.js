const router = require('express').Router();
const { emailExists,
    passwordIsNotEmpty,
    UserIsValid } = require('../middlewares/loginMiddlewares.js');

const { UserGenerateToken } = require('../controllers/loginController');

router.post('/', 
    emailExists,
    passwordIsNotEmpty,
    UserIsValid,
    UserGenerateToken);

module.exports = router;