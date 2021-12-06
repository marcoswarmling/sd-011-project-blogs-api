const router = require('express').Router();
const { user } = require('../services');
const userValidMiddle = require('../validators/middlewares/userValidMiddle');
const tokenValidMiddle = require('../validators/middlewares/tokenValidMiddle');

const STATUS_CREATED = 201;
const STATUS_OK = 200;

router.get('/', tokenValidMiddle, async (_req, res, next) => {
  try {
    const result = await user.getAll();
  
    res.status(STATUS_OK).json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/', userValidMiddle, async (req, res, next) => {
  const { body } = req;

  try {
    const result = await user.createIt(body);
  
    res.status(STATUS_CREATED).json(result);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', tokenValidMiddle, async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await user.getById(id);

    if (result.message) return next(result);
  
    res.status(STATUS_OK).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;