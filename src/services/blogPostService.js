const { BlogPost, User, PostCategory, Category } = require('../models');

const messageErrorServer = { code: 500, result: { message: 'Internal Error Server' } };

const createBlogPost = async (userEmail, title, content, categoryIds) => {
  const today = new Date();
  try {
    const [dataValues] = await User.findAll({ where: { email: userEmail } });
    console.log('datavalues', dataValues.id);
    const userId = await dataValues.id;
    const postCreated = await BlogPost.create({
      title, content, userId, published: today, updated: today });
    const postId = await postCreated.dataValues.id;
    categoryIds.forEach((categoryId) => {
      PostCategory.create({ categoryId, postId });
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

const updatePostById = async (id, title, content) => {
  const updated = new Date();
  try {
    await BlogPost.update(
      { title, content, updated },
      { where: { id } },
    );
    const blogPostUpdated = await BlogPost.findByPk(id, {
      attributes: ['title', 'content', 'userId'],
      include: [
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return { code: 200, result: blogPostUpdated };
  } catch (error) {
    return messageErrorServer;
  }
};

const excludeBlogPost = async (id) => {
  try {
    await BlogPost.destroy({ where: { id } });
    return { code: 204 };
  } catch (error) {
    return messageErrorServer;
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updatePostById,
  excludeBlogPost,
};