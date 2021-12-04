const { BlogPost, PostCategory } = require('../services');

const createPost = async (req, res, next) => {
  const { body, user } = req;
  const { title, content, categoryIds } = body;
  const userId = user.id;

  try {
    const newPost = await BlogPost.createPost({ title, content, categoryIds, userId });

    await PostCategory.createPostsCategories(newPost.id, categoryIds);

    return res.status(201).json(newPost);
  } catch (error) {
    return next(error);
  }
};

const getAllPosts = async (_req, res, next) => {
  try {
    const posts = await BlogPost.getAllPosts();

    return res.status(200).json(posts);
  } catch (error) {
    return next(error);
  }
};

const getPostById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await BlogPost.getPostById(id);

    return res.status(200).json(post);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};
