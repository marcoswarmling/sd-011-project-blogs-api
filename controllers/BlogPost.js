const { BlogPost } = require('../services');

const createPost = async (req, res, next) => {
  const { body, user } = req;
  const { title, content, categoryIds } = body;
  const userId = user.id;

  try {
    const newPost = await BlogPost.createPost({ title, content, categoryIds, userId });

    return res.status(201).json(newPost);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createPost,
};
