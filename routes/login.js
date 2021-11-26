const router = require('express').Router();
const { loginController } = require('../controllers/login');
const { validateToken } = require('../Middlewares/authorizations');

router.post('/', validateToken, loginController.userLogin);

module.exports = router;
