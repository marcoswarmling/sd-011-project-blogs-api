const router = require('express').Router();

const categController = require('../controllers/categoryController');

const { validationFields } = require('../validations');
const { categoryAlreadyExists } = require('../validations/name');

const authToken = require('../validations/authToken');

router.post('/',
  authToken,
  validationFields,
  categoryAlreadyExists,
  categController.registerCategory);

module.exports = router;