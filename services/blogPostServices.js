const { BlogPosts, Categories, Users } = require('../models/index');
const checkAllExists = require('../helpers/checkAllExists');

const post = async (title, content, categoryIds, data) => {
  const userId = data.id;

  const categories = await Categories.findAll();

  const doesCatExists = checkAllExists(categoryIds, categories);

  if (!doesCatExists) throw new Error('"categoryIds" not found');

  const result = await BlogPosts.create({ title, content, userId });

  const postResult = {
    id: result.id,
    userId,
    title: result.title,
    content: result.content,
  };

  return postResult;
};

const getAll = async () => {
  const allPosts = await BlogPosts.findAll({
    attributes: { exclude: ['UserId'] },
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!allPosts) throw new Error('No posts found');
  return allPosts;
};

module.exports = {
  post,
  getAll,
};
