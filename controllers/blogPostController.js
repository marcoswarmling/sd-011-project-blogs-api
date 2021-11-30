const blogPostServices = require('../services/blogPostServices');

const post = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { data } = req.userInfo;
    const result = await blogPostServices.post(title, content, categoryIds, data);
    return res.status(201).json(result);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await blogPostServices.getAllPost();
    return res.status(200).json(allPosts);
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: e.message });
  }
};

const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await blogPostServices.getOnePost(id);
    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: e.message });
  }
};

const updateOnePost = async (req, res) => {
  try {
    const { data } = req.userInfo;
    const { title, content } = req.body;
    const { id } = req.params;
    const updatedPost = await blogPostServices.updateOnePost(data, title, content, id);
    return res.status(200).json(updatedPost);
  } catch (e) {
    console.error(e);
    return res.status(401).json({ message: e.message });
  }
};

const deleteOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    await blogPostServices.deleteOnePost(id);
    return res.status(204).json();
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  post,
  getAllPosts,
  getOnePost,
  updateOnePost,
  deleteOnePost,
};
