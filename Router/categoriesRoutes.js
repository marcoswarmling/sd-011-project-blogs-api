const router = require('express').Router();

const { validateCategName } = require('../Validations/categories');

const { insertCategCtrl, getCategoriesCtrl } = require('../Controllers/categories');

const JWTValidate = require('../Validations/auth');

router.post('/', JWTValidate, validateCategName, insertCategCtrl);

router.get('/', JWTValidate, getCategoriesCtrl);

module.exports = router;