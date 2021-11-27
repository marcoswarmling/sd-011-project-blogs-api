const router = require('express').Router();
const { insertCategorie } = require('../controller/controllerCategories');

const { cheNameCategories, checkToken, checkValidToken } = require('../middleware');

router.post('/', cheNameCategories, checkToken, checkValidToken, insertCategorie);

module.exports = router;
