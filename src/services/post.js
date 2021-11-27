const { BlogPost, PostsCategory } = require('../../models');
require('dotenv').config();

const createPost = async (items) => {
  try {
    const { categoryIds, ...item } = items;
    const newPost = await BlogPost.create(item);

    const createPostsCategory = await categoryIds.map(async (id) => {
      const newCategory = await PostsCategory.create({ 
        categoryId: id, postId: newPost.dataValues.id, 
      });
      return newCategory;
    });
    await Promise.all(createPostsCategory);

    return newPost;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createPost,
};