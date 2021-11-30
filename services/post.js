const { BlogPost } = require('../models');

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

module.exports = {
  registerPost,
};
