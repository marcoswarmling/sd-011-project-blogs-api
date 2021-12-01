const express = require('express');

const router = express.Router();
const { validateBody } = require('../middlewares/validation');
const controllers = require('../controllers/usersController');

router.post('/', validateBody, controllers.create);

module.exports = router;