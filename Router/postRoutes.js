const router = require('express').Router();

const { 
  insertPostCtrl,
  getPostsCtrl,
  getPostByIdCtrl } = require('../Controllers/posts');

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

router.get('/:id', JWTValidate, getPostByIdCtrl);

module.exports = router;
