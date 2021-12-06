const express = require('express');
const postsController = require('../controllers/Posts');
const validationPost = require('../validationPost');
const validationJWT = require('../validationJwt');

const router = express.Router();

router.post('/', validationJWT, validationPost, postsController.create);
router.get('/', validationJWT, postsController.getAll);

module.exports = router;