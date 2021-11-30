const db = require('../models');
const postCategoriesHelper = require('../helper/postsCategoriesHelper');

class BlogPostController {
  static async createBlogPost(req, res) {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    const blogPost = {
      title,
      content,
      userId: id,
    };
    try {
      const createdBlogPost = await db.BlogPosts.create(blogPost);
      await postCategoriesHelper(createdBlogPost.id, categoryIds);
      return res.status(201).json(createdBlogPost);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async getAllBlogPosts(_req, res) {
    try {
      const allBlogPosts = await db.BlogPosts.findAll({
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
      return res.status(200).json(allBlogPosts);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async getBlogPostsById(req, res) {
    const { id } = req.params;
    const allBlogPosts = await db.BlogPosts.findOne({ where: { id },
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
    if (!allBlogPosts) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(allBlogPosts);
  }
}

module.exports = BlogPostController;
