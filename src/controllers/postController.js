const postService = require('../services/postService');

const createPost = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const newPost = await postService.postRegister(title, categoryIds, content, req.userId);
    if (newPost.message) {
      return res.status(400).json(newPost);
    }
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

const allPost = async (_req, res) => {
  try {
    const callPost = await postService.getAllPost();
    if (callPost.message) {
      return res.status(400).json(callPost);
    }
    res.status(200).json(callPost);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

const postById = async (req, res) => {
  try {
    const { id } = req.params;
    const findPostById = await postService.getPostById(id);
    if (findPostById.message) {
      return res.status(404).json(findPostById);
    }
    res.status(200).json(findPostById);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const { userId } = req;
    const updateOne = await postService.updateById(id, title, content, userId);
    if (updateOne.message) {
      return res.status(401).json(updateOne);
    }
    res.status(200).json(updateOne);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

module.exports = {
  createPost,
  allPost,
  postById,
  update,
};
