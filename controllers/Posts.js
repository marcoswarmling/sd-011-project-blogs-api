const Posts = require('../services/Posts');

const create = async (req, res) => {
  try {
    const { content, title, categoryIds } = req.body;
    const { id: userId } = req.user;
    
    const { post, code, message } = await Posts.create({ content, title, categoryIds, userId });
  
    if (!post) return res.status(code).json({ message });

    res.status(code).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const posts = await Posts.getAll();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { 
  create,
  getAll,
 };