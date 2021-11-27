const ServiceBlogPost = require('../service/serviceBlogPost');

async function create(req, res) {
  try {
    const { title, content } = req.body;
    const newBlogPost = await ServiceBlogPost.create(title, content, req.userId);

    if (newBlogPost.message) {
      return res.status(409).json(newBlogPost);
    }
    return res.status(201).json(newBlogPost);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

async function getAll(_req, res) {
  try {
    const getAllBlogPosts = await ServiceBlogPost.getAll();
    console.log(getAllBlogPosts);
    return res.status(200).json(getAllBlogPosts);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = { create, getAll };
