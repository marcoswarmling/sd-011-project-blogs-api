const { BlogPost, User, Category } = require('../models');
const { isValidUser, isValidCategory, validPost } = require('../utils/validations');

const postRegister = async (post, userEmail) => {
  const { title, content, categoryIds } = post;

  const validCategory = await isValidCategory(categoryIds);

  if (validCategory) {
    const result = await isValidUser(userEmail);
    const { id } = result;
    if (!result.error) return BlogPost.create({ title, content, userId: id, categoryIds });
    return result;
  } return ({ error: { code: 'inexistingCategory' } });
};

const getAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return result;
};

const getPostById = async (id) => {
  const valid = await validPost(id);
  
  if (!valid.error) {
    const result = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
  
    return result;
    } return valid;
};

const updatePost = async (post, userEmail, categoryIds) => {
  if (categoryIds) return ({ error: { code: 'categoryIsNotEdited' } });
  const { id, title, content } = post;
  const postDatabase = await getPostById(id);
  const { email } = postDatabase.user;
  if (email === userEmail) {
    await BlogPost.update({ title, content }, 
      { where: { id } });
    const newPost = await BlogPost.findOne({
      where: { id },
      include: [
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return newPost;
  } return ({
      error: { code: 'postNotPertence' },
  });
};

const removePost = async (id, userEmail) => {
  const validation = await validPost(id);
  if (validation.error) return validation;

  const post = await getPostById(id);
  const { email } = post.user;

  if (email === userEmail) {
    return BlogPost.destroy({ where: { id } });
  } return { error: { code: 'postNotPertence' } };
};

module.exports = {
  postRegister,
  getAllPosts,
  getPostById,
  updatePost,
  removePost,
};
