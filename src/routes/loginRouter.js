const router = require('express').Router();
const loginControllers = require('../controllers/loginControllers');
// const {
// } = require('../middlewares/loginMiddlewares');

router.post('/', loginControllers);

module.exports = router;