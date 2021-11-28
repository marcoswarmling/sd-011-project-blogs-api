const { BlogPost, User, PostCategory, Category } = require('../models');

const messageErrorServer = { code: 500, result: { message: 'Internal Error Server' } };

const createBlogPost = async (userEmail, title, content, categoryIds) => {
  const today = new Date();
  try {
    const [{ dataValues }] = await User.findAll({ where: { email: userEmail } });
    const userId = dataValues.id;
    const postCreated = await BlogPost.create({
      title, content, userId, published: today, updated: today });
    const blogpostId = postCreated.dataValues.id;
    categoryIds.forEach((categoryId) => {
      PostCategory.create({ categoryId, blogpostId });
    });
    return {
      code: 201,
      result: { id: postCreated.id, userId, title, content },
    };
  } catch (error) {
    return messageErrorServer;
  }
};

const getAllBlogPosts = async () => {
  try {
    const blogPostsFind = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return { code: 200, result: blogPostsFind };
  } catch (error) {
    return messageErrorServer;
  }
};

const getBlogPostById = async (id) => {
  try {
    const blogPostsFindById = await BlogPost.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    if (!blogPostsFindById) return { code: 404, result: { message: 'Post does not exist' } };
    return { code: 200, result: blogPostsFindById };
  } catch (error) {
    return messageErrorServer;
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
};