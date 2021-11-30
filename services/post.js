const { BlogPost, User, Category } = require('../models');

const registerPost = async (title, userId, content) => {
  try {
    const post = await BlogPost.create({
      title,
      content,
      userId,
    });
    return post;
  } catch (err) {
    return err;
  }
};

const getAllPosts = async () => {
  try {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return posts;
  } catch (err) {
    return err;
  }
};

module.exports = {
  registerPost,
  getAllPosts,
};
