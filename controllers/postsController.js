const PostsService = require('../services/postsService');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    
    const newPost = await PostsService.create({ title, content, categoryIds });
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

module.exports = {
  create,
}; 