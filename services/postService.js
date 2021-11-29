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

const updatePost = async (post, userEmail) => {
  const { id, title, content } = post;
  const postDatabase = await getPostById(id);
  const { email } = postDatabase.user;
  if (email === userEmail) {
    return BlogPost.update({ title, content }, 
      { where: { id } });
  } return ({
      error: { code: 'postNotPertence' },
  });
};

module.exports = {
  postRegister,
  getAllPosts,
  getPostById,
  updatePost,
};
