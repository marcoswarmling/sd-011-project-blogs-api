const { verifyToken } = require('../helpers/handleToken');
const { BlogPosts, PostsCategories, Category, User } = require('../models');

const validateCategories = async (array) => {
  const response = await array.reduce(async (acc, curr) => {
    if (await Category.findByPk(curr)) return acc;
    return false;
  }, true);
  // if (!response) throw new Error('"categoryIds" not found');
  return response;
};

const validateFields = (data) => {
  if (!data.title) return { message: '"title" is required' };
  if (!data.content) return { message: '"content" is required' };
  if (!data.categoryIds) return { message: '"categoryIds" is required' };
  return false;
};

const create = async (post, token) => {
  try {
    const user = verifyToken(token).data.dataValues;
    const fields = validateFields(post);
    if (fields) return fields;
    const masquemerda = await validateCategories(post.categoryIds);
    if (!masquemerda) return { message: '"categoryIds" not found' };
    const { dataValues } = await BlogPosts.create({ ...post, userId: user.id });
    await post.categoryIds.forEach(async (categoryId) => {
      await PostsCategories.create({
        postId: dataValues.id,
        categoryId,
      });
    });
    return dataValues;
  } catch (error) {
    return { message: 'Expired or invalid token' };
  }
};

const getAll = async (token) => {
  try {
    verifyToken(token);
    const posts = await BlogPosts.findAll({
      include: [
        {
          model: User, as: 'user', attributes: { exclude: ['password'] },
        },
        {
          model: Category, as: 'categories',
        },
      ],
    });
    return posts;
  } catch (error) {
    console.log(error);
    return { message: 'Expired or invalid token' };
  }
};

module.exports = {
  getAll,
  create,
};
