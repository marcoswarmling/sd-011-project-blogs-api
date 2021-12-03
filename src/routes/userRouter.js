const router = require('express').Router();
const userControllers = require('../controllers/userControllers');
const {
  userValidation,
} = require('../middlewares/userMiddlewares');
const validateJWT = require('../auth/validateJWT');

router.post('/', userValidation, userControllers.create);
router.get('/', validateJWT, userControllers.getAll);
router.get('/:id', validateJWT, userControllers.getById);

module.exports = router;