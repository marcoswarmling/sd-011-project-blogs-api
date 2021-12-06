const router = require('express').Router();
const { category } = require('../services');
const categoryValidMiddle = require('../validators/middlewares/categoryValidMiddle');
const tokenValidMiddle = require('../validators/middlewares/tokenValidMiddle');

const STATUS_CREATED = 201;
const STATUS_OK = 200;

router.get('/', tokenValidMiddle, async (_req, res, next) => {
  try {
    const result = await category.getAll();
  
    res.status(STATUS_OK).json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/', tokenValidMiddle, categoryValidMiddle, async (req, res, next) => {
  const { body } = req;

  try {
    const result = await category.createIt(body);
  
    res.status(STATUS_CREATED).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;