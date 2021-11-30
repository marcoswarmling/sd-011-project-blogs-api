const router = require('express').Router();
const { user } = require('../services');

router.get('/', async (_req, res) => { // For model test
  const result = await user.getAll();

  if (result.message) {
    return res.status(500).json({ message: `Error in Controller. Error.msg: ${result.message}` });
  }

  res.status(200).json(result);
});

module.exports = router;