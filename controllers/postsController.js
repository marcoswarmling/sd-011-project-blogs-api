const service = require('../services/postsService');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    // console.log('postControllerBody:', req.body);
    const { id } = req.user;
    const newBlogPost = await service.create({ title, content, categoryIds, id });

    // identifico o category not found, caso exista o erro é emitido. Caso contrário, sucesso da aplicação.

    if (newBlogPost.err) {
      return res.status(400).json(newBlogPost.err.message); 
    }
    // console.log('postController:', newBlogPost);
    return res.status(201).json(newBlogPost);
  } catch (e) {
    res.status(400).json({ err: e.message });
  } 
};

const getAll = async (req, res) => {
  try {
    const blogPosts = await service.getAll();
    // console.log('getAllPostController', blogPosts);
    return res.status(200).json(blogPosts);
  } catch (e) {
    res.status(400).json({ err: e.message });
  } 
};

module.exports = {
  create,
  getAll,
};
