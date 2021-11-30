const { BlogPosts } = require('../models');
const servicePostsCategories = require('../service/servicePostsCategories');

async function controllerPostBlog(req, res) {
  const { title, content, categoryIds } = req.body;
  const { id } = req.userInfo;
  const date = Date.now();

  try {
    const result = await BlogPosts.create({
      title,
      content,
      userId: id,
      categoryIds,
      published: date,
      updated: date,
    });
    // Inserir categoria dos Posts na tabela PostsCategories
    await servicePostsCategories(id, categoryIds);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno' });
  }
}

module.exports = {
  controllerPostBlog,
};
