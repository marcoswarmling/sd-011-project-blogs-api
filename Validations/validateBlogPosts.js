const { blogPostsJoi } = require('../Middlewares/blogPostsJoi');

const postValidate = (request, response, next) => {
  const post = request.body;
  const { error } = blogPostsJoi.validate(post);
  if (error) return response.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = postValidate;