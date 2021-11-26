const router = require('express').Router();
const validateJWT = require('../auth/validateJWT');
const categorieController = require('../controllers/categorieController');

router.post('/', validateJWT, categorieController.create);

module.exports = router;