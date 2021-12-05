const { BlogPost, Category } = require('../models');

const validateFields = (title, content) => {
  if (!title) return { err: { code: 400, message: { message: '"title" is required' } } };
  if (!content) return { err: { code: 400, message: { message: '"content" is required' } } };
};

const createPost = async ({ title, content, categoryIds, id }) => {
  if (validateFields(title, content)) return validateFields(title, content);
  if (!categoryIds) {
    return { err: { code: 400, message: { message: '"categoryIds" is required' } } };
  }
  const teste = await Category.findAll({
    where: { id: categoryIds },
  });
  if (teste.length !== categoryIds.length) {
    return { err: { code: 400, message: { message: '"categoryIds" not found' } } };
  }
  const createdPost = await BlogPost.create({ title, content, userId: id });
  const post = await BlogPost.findByPk(createdPost.dataValues.id, {
    attributes: { exclude: ['published', 'updated'] } });
  await post.addCategory(teste);
  return post;
};

module.exports = { createPost };