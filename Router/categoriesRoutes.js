const router = require('express').Router();

const { validateCategName } = require('../Validations/categories');

const { insertCategCtrl } = require('../Controllers/categories');

const JWTValidate = require('../Validations/auth');

router.post('/', JWTValidate, validateCategName, insertCategCtrl);

module.exports = router;