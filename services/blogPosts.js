const { BlogPost, Category, User } = require('../models');
const { status, postMessages } = require('../Helpers/status&messages');

const createPost = async (title, content, categoryIds, userId) => {
  const categories = await Category.findAll({ where: { id: categoryIds } });
  if (categories.length !== categoryIds.length) {
    return { status: status.badRequest, message: postMessages.categoryIdNotFound };
  }
  const { dataValues: newPost } = await BlogPost.create({ title, content, userId });
  return newPost;
};

const getAllPosts = async () => {
const allPosts = await BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' },
  ],
});
if (!allPosts) {
  return { status: 404, message: 'no post' };
}

  return allPosts;
};

const getById = async (id) => {
  const postById = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: { exclude: ['PostCategory'] } },
    ],
  });
  if (!postById) {
    return { status: status.notFound, message: postMessages.postNotExist };
  }
  return postById;
};

const editPost = async (title, content, postId) => {
  await BlogPost.update({ title, content }, {
    where: { id: postId },
  });
  const { dataValues } = await BlogPost.findByPk(postId, {
    exclude: [
      { model: BlogPost,
        as: 'BlogPosts',
        attributes: { exclude: ['id', 'publishedAt', 'updatedAt'] } },
      { model: User, as: 'user', attributes: { exclude: [] } }], 
    include: [{ model: Category, as: 'categories', attributes: { include: ['id', 'name'] } }],
  });
  return dataValues;
};

module.exports = { createPost, getAllPosts, getById, editPost };
