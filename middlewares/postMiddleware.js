const { createPostFields } = require('../validations/posts');

const postFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const isInvalidPost = createPostFields({ title, content, categoryIds });
  
  if (isInvalidPost) {
    return res.status(isInvalidPost.err.code).json({ message: isInvalidPost.err.message });
  }

  next();
};

module.exports = {
  postFields,
};