const express = require('express');
const postsController = require('../controllers/Posts');
const { newPostValidations } = require('../middlewares');
const validationJWT = require('../auth/validationJWT');

const router = express.Router();

router.post('/', validationJWT, newPostValidations, postsController.create);

module.exports = router;
