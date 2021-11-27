const { BlogPost, User, PostCategory } = require('../models');

const messageErrorServer = 'Internal Error Server';

const createBlogPost = async (userEmail, title, content, categoryIds) => {
  const today = new Date();
  try {
    const [{ dataValues }] = await User.findAll({ where: { email: userEmail } });
    const userId = dataValues.id;
    const postCreated = await BlogPost.create({
      title, content, userId, published: today, updated: today });
    console.log(postCreated);
    const blogpostId = postCreated.dataValues.id;
    categoryIds.forEach((categoryId) => {
      PostCategory.create({ categoryId, blogpostId });
    });
    return { code: 201, result: postCreated };
  } catch (error) {
    return { code: 500, result: { message: messageErrorServer } };
  }
};

module.exports = {
  createBlogPost,
};