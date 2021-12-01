const router = require('express').Router();
const { login } = require('../services');
const loginValidMiddle = require('../validators/middlewares/loginValidMiddle');

const STATUS_OK = 200;

router.post('/', loginValidMiddle, (req, res, next) => {
  const { user } = req;

    const result = login(user);

    if (result.status) return next(result);

    const token = result;

    res.status(STATUS_OK).json({ token });
});

module.exports = router;