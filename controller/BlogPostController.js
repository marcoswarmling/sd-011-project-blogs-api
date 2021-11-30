const db = require('../models');
const postsCategoriesHelper = require('../helper/postsCategoriesHelper');

const getAllBlogPosts = async (_req, res) => {
  try {
    const blogPosts = await db.BlogPosts.findAll({
      include: [
        { model: db.Users, 
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        { model: db.Categories,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    });

    return res.status(200).json(blogPosts);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const newBlogPost = {
    title,
    content,
    userId: id,
  };
  
  try {
    const createdBlogPost = await db.BlogPosts.create(newBlogPost);
    await postsCategoriesHelper(createdBlogPost.id, categoryIds);
    return res.status(201).json(createdBlogPost);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
};
