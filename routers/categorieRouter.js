const express = require('express');

const router = express.Router();

const { auth } = require('../middlewares/auth');

const { createCategorie } = require('../controllers/categoriesControllers');
const { isValidCategorie } = require('../middlewares/validations');

router.post('/', auth, isValidCategorie, createCategorie);

module.exports = router;
