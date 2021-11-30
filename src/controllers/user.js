const router = require('express').Router();
const { user } = require('../services');

const STATUS_CREATED = 201;

router.get('/', async (_req, res) => { // For model test
  const result = await user.getAll();

  if (result.message) {
    return res.status(500).json({ message: `Error in Controller. Error.msg: ${result.message}` });
  }

  res.status(200).json(result);
});

router.post('/', async (req, res) => {
  const { body } = req;

  const result = await user.createIt(body);

  if (result.message) {
    return res.status(500).json({ message: `Error in Controller. Error.msg: ${result.message}` });
  }

  res.status(STATUS_CREATED).json(result);
});

module.exports = router;