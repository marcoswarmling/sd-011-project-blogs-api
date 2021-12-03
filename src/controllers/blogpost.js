const router = require('express').Router();
const { blogpost } = require('../services');
const tokenValidMiddle = require('../validators/middlewares/tokenValidMiddle');

const STATUS_CREATED = 201;
const STATUS_OK = 200;

router.get('/', tokenValidMiddle, async (_req, res, next) => {
    const result = await blogpost.getAll();
  
    if (result.message) return next(result);
  
    res.status(STATUS_OK).json(result);
  });

router.post('/', tokenValidMiddle, async (req, res, next) => {
    const { body, user } = req;

    const result = await blogpost.createIt({ body, user });
  
    if (result.message) return next(result);

    res.status(STATUS_CREATED).json(result);
});

module.exports = router;