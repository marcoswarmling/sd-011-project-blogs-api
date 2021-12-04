const express = require('express');
const rescue = require('express-rescue');
const postController = require('../controllers/postController');
const { postValidation } = require('../middlewares/postValidations');
const { jwtValidation } = require('../auth/validateJWT');

const router = express.Router();

router.post(
  '/post',
  rescue(postValidation),
  rescue(jwtValidation),
  rescue(postController.postCreate),
);

module.exports = router;
