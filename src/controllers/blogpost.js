const router = require('express').Router();
const { blogpost } = require('../services');
const tokenValidMiddle = require('../validators/middlewares/tokenValidMiddle');

const STATUS_CREATED = 201;

router.post('/', tokenValidMiddle, async (req, res, next) => {
    const { body, user } = req;

    const result = await blogpost.createIt({ body, user });
  
    if (result.message) return next(result);

    res.status(STATUS_CREATED).json(result);
});

module.exports = router;