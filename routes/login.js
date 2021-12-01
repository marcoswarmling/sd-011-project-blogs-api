const router = require('express').Router();
const { userLogin } = require('../controllers/login');
const { loginMiddleware } = require('../Middlewares/loginMiddleware');

router.post('/', loginMiddleware, userLogin);

module.exports = router;
