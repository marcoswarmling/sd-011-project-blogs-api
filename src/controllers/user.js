const router = require('express').Router();
const { user } = require('../services');
const userValidMiddle = require('../validators/middlewares/userValidMiddle');
const tokenValidMiddle = require('../validators/middlewares/tokenValidMiddle');

const STATUS_CREATED = 201;

router.get('/', tokenValidMiddle, async (_req, res) => { // For model test
  const result = await user.getAll();

  if (result.message) {
    return res.status(500).json({ message: `Error in Controller. Error.msg: ${result.message}` });
  }

  res.status(200).json(result);
});

router.post('/', userValidMiddle, async (req, res) => {
  const { body } = req;

  const result = await user.createIt(body);

  if (result.message) {
    return res.status(500).json({ message: `Error in Controller. Error.msg: ${result.message}` });
  }

  res.status(STATUS_CREATED).json(result);
});

router.get('/:id', tokenValidMiddle, async (req, res) => {
  const { id } = req.params;

  const result = await user.getById(id);

  if (result.message) {
    const { status, message } = result;
    return res.status(status).json({ message });
  }

  res.status(200).json(result);
});

module.exports = router;