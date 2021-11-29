const { BlogPosts } = require('../models');

async function controllerPostBlog(req, res) {
  const { title, content, categoryIds } = req.body;
  const { id } = req.userInfo;
  const date = Date.now();

  const result = await BlogPosts.create({
    title,
    content,
    userId: id,
    categoryIds,
    published: date,
    updated: date,
  });

  res.status(201).json(result);
}

module.exports = {
  controllerPostBlog,
};
