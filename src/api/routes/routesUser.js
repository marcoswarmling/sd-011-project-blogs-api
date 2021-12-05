const router = require('express').Router();
const userControllers = require('../../controllers/userControllers');
const { validateSchema } = require('../../middlewares/validateSchema');
const { usersSchema } = require('../../schemas/userSchema');

router.post('/', validateSchema(usersSchema), userControllers.createUser);
router.get('/', userControllers.getUsers);

module.exports = router;
