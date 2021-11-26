const PostsService = require('../services/postsService');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const newPost = await PostsService.create({ title, content, id });
    categoryIds.forEach(async (categoryId) => {
      await PostsService.createPostCategories({ postId: newPost.id, categoryId });
    });
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

module.exports = {
  create,
}; 