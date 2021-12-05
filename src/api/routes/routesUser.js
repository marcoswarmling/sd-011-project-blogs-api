const router = require('express').Router();
const userControllers = require('../../controllers/userControllers');
const { validateSchema } = require('../../middlewares/validateSchema');
const { usersSchema } = require('../../schemas/userSchema');

router.get('/', userControllers.getUsers);
router.get('/:id', userControllers.getUserById);
router.post('/', validateSchema(usersSchema), userControllers.createUser);

module.exports = router;
