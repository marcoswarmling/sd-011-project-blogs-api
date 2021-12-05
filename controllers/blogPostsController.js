const blogPostsService = require('../services/blogPostsService');
const { Users } = require('../models');

async function create(req, res) {
  const { title, categoryIds, content } = req.body;

  const { email } = req.user;
  const users = await Users.findAll();
  const loggedUser = users.find((user) => user.email === email);
  const userId = loggedUser.id;

  const blogPost = await blogPostsService.create({
    title,
    categoryIds,
    content,
    userId,
  });

  return res.status(201).json(blogPost);
}

module.exports = {
  create,
};
