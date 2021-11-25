const router = require('express').Router();
const loginController = require('../controllers/login');

router.post('/', loginController.userLogin);

module.exports = router;
