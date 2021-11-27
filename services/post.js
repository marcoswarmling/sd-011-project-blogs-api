const { Categories, BlogPosts, PostsCategories, Users } = require('../models');

const categoryIdsExists = async (categoryIds) => {
  const allCategories = await Categories.findAll({
    attributes: ['id'],
  });

  const categoriesIds = [];
  allCategories.forEach(({ dataValues: { id } }) => {
    categoriesIds.push(id);
  });

  if (categoryIds.every((category) => categoriesIds.includes(category))) {
    return true;
  }
  return false;
};

const createBlogPosts = async (newPostData) => {
  const { title, content, userId, categoryIds, published, updated } = newPostData;
  const newPost = await BlogPosts.create({ title, content, userId, published, updated });

  const { id } = newPost.dataValues;
  
  categoryIds.forEach(async (categoryId) => {
    await PostsCategories.create({ postId: id, categoryId });
  });

  return newPost;
};

const getAllBlogPosts = async () => {
  const posts = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  console.log('aaaaaaaaaa', posts);

  return posts;
};

module.exports = {
  categoryIdsExists,
  createBlogPosts,
  getAllBlogPosts,
};
