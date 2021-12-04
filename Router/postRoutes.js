const router = require('express').Router();

const { insertPostCtrl, getPostsCtrl } = require('../Controllers/posts');

const { 
  validateTitle,
  validateContent,
  validateCategId } = require('../Validations/posts');

const JWTValidate = require('../Validations/auth');

router.post('/', 
  JWTValidate,
  validateTitle, 
  validateContent, 
  validateCategId, 
  insertPostCtrl);

router.get('/', JWTValidate, getPostsCtrl);

module.exports = router;
