const serviceCreatePost = require('../service/serviceCreatePost');

const controllerCreatePost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;
  const newPost = { title, content, categoryIds };
  try {
    const post = await serviceCreatePost(newPost, token);
    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'problema aqui: rota post user' });
  }
};
module.exports = controllerCreatePost;