const router = require('express').Router();
const { category } = require('../services');
const categoryValidMiddle = require('../validators/middlewares/categoryValidMiddle');
const tokenValidMiddle = require('../validators/middlewares/tokenValidMiddle');

const STATUS_CREATED = 201;

// router.get('/', tokenValidMiddle, async (_req, res) => { // For model test
//   const result = await category.getAll();

//   if (result.message) {
//     return res.status(500).json({ message: `Error in Controller. Error.msg: ${result.message}` });
//   }

//   res.status(200).json(result);
// });

router.post('/', tokenValidMiddle, categoryValidMiddle, async (req, res) => {
  const { body } = req;

  const result = await category.createIt(body);

  if (result.message) {
    return res.status(500).json({ message: `Error in Controller. Error.msg: ${result.message}` });
  }

  res.status(STATUS_CREATED).json(result);
});

// router.get('/:id', tokenValidMiddle, async (req, res) => {
//   const { id } = req.params;

//   const result = await category.getById(id);

//   if (result.message) {
//     const { status, message } = result;
//     return res.status(status).json({ message });
//   }

//   res.status(200).json(result);
// });

module.exports = router;