const { PostsCategories, BlogPosts, User, Categories } = require('../models');
const { createBlogposts } = require('../services/postService');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { dataValues: { id } } = await createBlogposts({ title, content, categoryIds });
  const { user } = req;
  const userId = user.id;
  await categoryIds.forEach((categoryId) => PostsCategories.create({
    postId: id,
    categoryId,
  }));
  return res.status(201).json({
    id,
    userId,
    title,
    content,
  });
};

const getAllPosts = async (req, res) => {
  const allBlogs = await BlogPosts.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Categories, as: 'categories' },
    ],
  });
  return res.status(200).json(allBlogs);
};

module.exports = { createBlogPost, getAllPosts };