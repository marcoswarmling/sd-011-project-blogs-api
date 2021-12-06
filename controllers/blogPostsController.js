const db = require('../models');
const postCategory = require('../middlleware/postCategory');

const createBlogPosts = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const blogPosts = {
    title,
    content,
    userId: id,
    };
    try {
      const blogPostsCreated = await db.BlogPosts.create(blogPosts);
      await postCategory(blogPostsCreated.id, categoryIds);
      console.log(blogPostsCreated.id);
      return res.status(201).json(blogPostsCreated);
    } catch (error) {
      return res.status(400).json(error.message);
    }
};

const getBlogPosts = async (_req, res) => {
  try {
    const getAllBlogPosts = await db.BlogPosts.findAll({
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
    return res.status(200).json(getAllBlogPosts);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  createBlogPosts,
  getBlogPosts,
};