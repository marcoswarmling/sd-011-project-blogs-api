const { BlogPosts, Users, Categories } = require('../models');
// Categories
// const servicePostsCategories = require('../service/servicePostsCategories');

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
    // await servicePostsCategories(id, categoryIds);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno' });
  }
}

async function controllerGetPostsBlog(req, res) {
  try {
    const result = await BlogPosts.findAll({
      include: [{
        model: Users,
        as: 'user',
        attributes: { exclude: ['password'] },
      }, {
        model: Categories,
        as: 'categories',
        through: { attributes: [] },
      }],
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function controllerGetPostsBlogId(req, res) {
  const { id } = req.params;
  try {
    const result = await BlogPosts.findOne({
      where: { id },
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (result === null) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  controllerPostBlog,
  controllerGetPostsBlog,
  controllerGetPostsBlogId,
};
