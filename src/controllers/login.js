const router = require('express').Router();
const { login } = require('../services');
const loginValidMiddle = require('../validators/middlewares/loginValidMiddle');

const STATUS_OK = 200;

router.post('/', loginValidMiddle, (req, res, next) => {
  const { user } = req;

  try {
    const token = login(user);  

    res.status(STATUS_OK).json({ token });  
  } catch (error) {
    next(error);
  }
});

module.exports = router;