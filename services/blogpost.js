const { BlogPost } = require('../models');
const { Categories } = require('../models');
const { User } = require('../models');

const validation = (data) => {
  const { title, categoryIds, content } = data;

  if (!title) return { message: '"title" is required', status: 400, valid: false };
  if (!categoryIds) return { message: '"categoryIds" is required', status: 400, valid: false };
  if (!content) return { message: '"content" is required', status: 400, valid: false };

  return { valid: true };
};

const createPost = async (data, userId) => {
  const { title, categoryIds, content } = data;
  const validationResponse = validation(data);
  if (!validationResponse.valid) {
    return validationResponse;
  }
  try {
    const categories = await Categories.findAll({ where: { id: categoryIds } });

    if (categories.length !== categoryIds.length) {
      return { message: '"categoryIds" not found', status: 400 };
    }

    const options = {};
    const newBlogPost = await BlogPost.create({ title, content, userId }, options);

    await newBlogPost.addCategories(categories);
    return newBlogPost;
  } catch (error) {
    console.log(error.message);

    return { message: 'Algo deu errado', status: 500 };
  }
};

const getAllPosts = async () => {
  try {
    return await BlogPost.findAll({
      attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
      include: [{ model: User,
as: 'user',
          attributes: ['id', 'displayName', 'email', 'image'] },
        { model: Categories,
as: 'categories',
          attributes: ['id', 'name'] }],
    });
  } catch (error) {
    console.log(error.message);

    return { message: 'Algo deu errado', status: 500 };
  }
};

module.exports = {
  createPost,
  getAllPosts,
};