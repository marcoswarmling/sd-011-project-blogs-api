const postService = require('../service/post');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  try {
    const response = await postService.createPost(id, title, content, categoryIds);
    if (response.err) {
      const { err, message } = response;
      return res.status(err.status).json({ message });
    }

    return res.status(201).json(response);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const response = await postService.getAllPosts();
    return res.status(200).json(response);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await postService.getPostById(id);

    if (response.err) {
      const { err, message } = response;
      return res.status(err.status).json({ message });
    }

    return res.status(200).json(response);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updatePost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: postId } = req.params;
  const { id: userId } = req.user;
  if (categoryIds) {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }
  try {
    const response = await postService.updatePost({ title, content, postId, userId });
    if (response.err) {
      const { err, message } = response;
      return res.status(err.status).json({ message });
    }

    return res.status(200).json(response);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
};