const router = require('express').Router();
const { user } = require('../services');
const userValidMiddle = require('../validators/middlewares/userValidMiddle');
const tokenValidMiddle = require('../validators/middlewares/tokenValidMiddle');

const STATUS_CREATED = 201;
const STATUS_OK = 200;

router.get('/', tokenValidMiddle, async (_req, res, next) => {
  const result = await user.getAll();

  if (result.message) return next(result);

  res.status(STATUS_OK).json(result);
});

router.post('/', userValidMiddle, async (req, res, next) => {
  const { body } = req;

  const result = await user.createIt(body);

  if (result.message) return next(result);

  res.status(STATUS_CREATED).json(result);
});

router.get('/:id', tokenValidMiddle, async (req, res, next) => {
  const { id } = req.params;

  const result = await user.getById(id);

  if (result.message) return next(result);

  res.status(STATUS_OK).json(result);
});

module.exports = router;