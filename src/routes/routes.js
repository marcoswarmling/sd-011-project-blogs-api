const router = require('express').Router();

const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');
const categoryRoutes = require('./categoryRoutes');
const errorHandler = require('../middlewares/errorHandler');

router.use('/user', userRoutes);
router.use('/login', loginRoutes);
router.use('/categories', categoryRoutes);

router.use(errorHandler);

module.exports = router;
