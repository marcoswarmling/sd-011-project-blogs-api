const { Op } = require('sequelize');

const { BlogPost, User, PostCategory, Category, sequelize } = require('../models');

const messageErrorServer = { code: 500, result: { message: 'Internal Error Server' } };

const createBlogPost = async (userEmail, title, content, categoryIds) => {
  const t = await sequelize.transaction();
  const today = new Date();
  try {
    const [dataValues] = await User.findAll({ where: { email: userEmail } });
    const userId = await dataValues.id;
    const post = await BlogPost.create({ title, content, userId, published: today, updated: today },
      { transaction: t });
    const postId = await post.dataValues.id;
    await Promise.all(categoryIds.forEach((categoryId) => PostCategory.create(
      { categoryId, postId }, { transaction: t },
      )));
    await t.commit();
    return { code: 201, result: { id: post.id, userId, title, content },
    };
  } catch (error) {
    await t.rollback();
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

const findPostByQueryParam = async (search) => {
  let posts = [];
  try {
    if (!search) {
      posts = await BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
      });
    } else {
      posts = await BlogPost.findAll({
        where: { [Op.or]: [{ title: search }, { content: search }] },
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
      });
    }
    return { code: 200, result: posts };
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
  findPostByQueryParam,
};