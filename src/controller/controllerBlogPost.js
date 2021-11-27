const ServiceBlogPost = require('../service/serviceBlogPost');

async function create(req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const newBlogPost = await ServiceBlogPost.create(id, title, content, req.userId);

    if (newBlogPost.message) {
      return res.status(409).json(newBlogPost);
    }
    return res.status(201).json(newBlogPost);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = { create };
