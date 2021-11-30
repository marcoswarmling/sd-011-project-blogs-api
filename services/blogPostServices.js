// const { Op } = require('sequelize');
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

// where: { 
//   [Op.or]: [
//     { title: { [Op.substring]: { searchParam } } },
//     { content: { [Op.substring]: { searchParam } } },
//   ],
// }, 

const getAllPost = async () => {
  console.log('entrou no getAllPoSTS');
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

const getOnePost = async (id) => {
  console.log('entrou no getONEPOST');
  const foundPost = await BlogPosts.findByPk(id, {
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!foundPost) throw new Error('Post does not exist');
  return foundPost;
};

const updateOnePost = async (data, title, content, id) => {
  const postToUpdate = await BlogPosts.findByPk(id);
  const isUserAllowed = data.id === postToUpdate.userId;
  if (!isUserAllowed) throw new Error('Unauthorized user');
  await BlogPosts.update(
    { title, content }, 
    { where: { id } },
  );
  const result = await BlogPosts.findByPk(id, {
    include: {
      model: Categories, as: 'categories', through: { attributes: [] },
    },
  });
  return result;
};

const deleteOnePost = async (id) => {
  const deletedPost = await BlogPosts.destroy({ where: { id } });
  console.log(deletedPost);
};

module.exports = {
  post,
  getAllPost,
  getOnePost,
  updateOnePost,
  deleteOnePost,
};
