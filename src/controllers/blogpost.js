const router = require('express').Router();
const { blogpost } = require('../services');

const STATUS_CREATED = 201;

router.post('/', async (req, res, next) => {
    const { body } = req;

    const result = await blogpost.createIt(body);
  
    if (result.message) return next(result);

    res.status(STATUS_CREATED).json({ result });
});

module.exports = router;