const router = require('express').Router();
const postController = require('../controller/postController');
const { tokenValidation } = require('../validations/tokenValidation');
const { postValidations } = require('../validations/postValidations');

router.post('/post', tokenValidation, postValidations, postController.createPost);

module.exports = router;