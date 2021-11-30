const postService = require('../service/postService');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const post = await postService.createNewPost({ title, content, categoryIds, id });
    return res.status(post.statusCode).json(post.response);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createPost,
};