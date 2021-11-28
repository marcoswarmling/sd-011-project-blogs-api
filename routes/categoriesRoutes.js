const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');
const validateJWT = require('../auth/validateJWT');

router.post('/', validateJWT, categoriesController.createCategorie);
// router.get('/', validateJWT, userController.getUsers);
// router.get('/:id', validateJWT, userController.getUserById);

module.exports = router;
