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

const findAll = async (req, res) => {
  try {
    const posts = await PostsService.findAll();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

const findByID = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostsService.findByID(id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  create,
  findAll,
  findByID,
}; 