const { BlogPost, User, Category } = require('../models');

const createNewPost = async ({ title, content, categoryIds, id: userId }) => {
  const post = await BlogPost.create({ title, content, userId });

  await post.setCategories(categoryIds);

  return { statusCode: 201, response: post };
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [{ 
      model: User, 
      as: 'user', 
      attributes: { exclude: ['password'] },
     },
     { model: Category, as: 'categories' }],
  });

  return { statusCode: 200, response: posts };
};

 module.exports = {
  createNewPost,
  getAllPosts,
};