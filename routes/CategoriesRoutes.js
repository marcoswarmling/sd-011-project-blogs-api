const router = require('express').Router();
const Validations = require('../middlewares/index');

router.post('/', Validations.validateJWT);

module.exports = router;