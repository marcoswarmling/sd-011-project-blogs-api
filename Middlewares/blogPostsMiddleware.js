const { status, postMessages } = require('../Helpers/status&messages');

const postMiddleware = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title) {
    return res.status(status.badRequest).json({ message: postMessages.titleRequired });
  }
  if (!content) {
    return res.status(status.badRequest).json({ message: postMessages.contentRequired });
  }
  if (!categoryIds) {
    return res.status(status.badRequest).json({ message: postMessages.categoryIdRequired });
  }
  next();
};

module.exports = { postMiddleware };
