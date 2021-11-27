const { BlogPosts, Categories } = require('../models/index');
const checkAllExists = require('../helpers/checkAllExists');

const post = async (title, content, categoryIds, data) => {
  const userId = data.id;

  const categories = await Categories.findAll();

  const doesCatExists = checkAllExists(categoryIds, categories);

  if (!doesCatExists) throw new Error('"categoryIds" not found');

  const result = await BlogPosts.create({ title, content, userId });
  console.log(result);

  const postResult = {
    id: result.id,
    userId: result.userId,
    title: result.title,
    content: result.content,
  };

  return postResult;
};

module.exports = {
  post,
};
