const { User, BlogPost, Category } = require('../models');

const validateFields = (title, content) => {
  if (!title) return { err: { code: 400, message: { message: '"title" is required' } } };
  if (!content) return { err: { code: 400, message: { message: '"content" is required' } } };
};

const createPost = async ({ title, content, categoryIds, id }) => {
  if (validateFields(title, content)) return validateFields(title, content);
  if (!categoryIds) {
    return { err: { code: 400, message: { message: '"categoryIds" is required' } } };
  }
  const idCategory = await Category.findAll({
    where: { id: categoryIds },
  });
  if (idCategory.length !== categoryIds.length) {
    return { err: { code: 400, message: { message: '"categoryIds" not found' } } };
  }
  const createdPost = await BlogPost.create({ title, content, userId: id });
  const post = await BlogPost.findByPk(createdPost.dataValues.id, {
    attributes: { exclude: ['published', 'updated'] } });
  await post.addCategory(idCategory);
  return post;
};

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [{ model: Category, as: 'categories' }, { model: User, as: 'user' }],
  });
  return posts;
};
module.exports = {
  createPost,
  getPosts,
};
