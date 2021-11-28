const { BlogPost, Category } = require('../models');
const { createPostValidation } = require('../validations/postValidations');

const createPost = async (title, content, id, categoryIds) => {
  const test = await createPostValidation(title, content, categoryIds);
  if (test !== true) {
    return test;
  }
  const categoryIdSearch = await Category.findAll({
    where: {
      id: categoryIds,
    },
  });
  console.log(categoryIdSearch);
  if (!categoryIdSearch || categoryIdSearch.length === 0) {
    return { error: { message: '"categoryIds" not found' } };
  }
  const blogPost = await BlogPost.create({ title, content, categoryIds, userId: id });
  return blogPost;
};

module.exports = { createPost };