const express = require('express');

const router = express.Router();
const { validateBody } = require('../middlewares/validation');
const controllers = require('../controllers/usersController');
const { validateJWT } = require('../middlewares/validateJWT');

router.post('/', validateBody, controllers.create);
router.get('/', validateJWT, controllers.getAll);

module.exports = router;