const { BlogPost, Category, PostsCategory } = require('../models');

const createPost = async (categoryIds, postData) => {
  const existingCategory = await Category.findOne({ where: { id: categoryIds } });

  if (!existingCategory) return { code: 'badRequest', message: '"categoryIds" not found' };

  const { dataValues: { createdAt, updatedAt, ...newPost } } = await BlogPost.create(postData);

  categoryIds.forEach(async (id) => PostsCategory.create({ postId: newPost.id, categoryId: id }));

  return newPost;
};

const getPosts = async () => {
  const categories = await PostsCategory.findAll();
  const allPosts = await BlogPost.findAll();
  console.log(categories, allPosts);

  return { ...allPosts, ...categories };
};

module.exports = {
  createPost,
  getPosts,
};