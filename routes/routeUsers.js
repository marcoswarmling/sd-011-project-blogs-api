const router = require('express').Router();
const { addNewUser } = require('../controller/controllerUsers');

router.post('/', addNewUser);

module.exports = router;
