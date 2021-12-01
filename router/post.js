const express = require('express');
const postsController = require('../controllers/Posts');
const { newPostValidations } = require('../middlewares');
const validationJWT = require('../auth/validationJWT');

const router = express.Router();

router.post('/', validationJWT, newPostValidations, postsController.create);
router.get('/', validationJWT, postsController.getAll);
router.get('/:id', validationJWT, postsController.getById);

module.exports = router;
