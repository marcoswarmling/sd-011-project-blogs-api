const router = require('express').Router();
const { validateSchema } = require('../../middlewares/validateSchema');
const { loginSchema } = require('../../schemas/loginSchema');
const { loginUser } = require('../../controllers/loginController');

router.post('/', validateSchema(loginSchema), loginUser);

module.exports = router;