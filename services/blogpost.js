const Joi = require('joi');
const { BlogPost, PostsCategory, Category } = require('../models');
const { User } = require('../models');
const ErrorList = require('../utils/errorList');

const newPostValidt = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number().integer()).required(),
});

const savePostCategories = async (postId, postCats) => {
  postCats.forEach(async (categoryId) => {
    await PostsCategory.create({ postId, categoryId });
  });
};

const areCategoriesTrue = async (postCats) => {
  const allCats = await Category.findAll();
  const areAllTrue = postCats.some((cat) => allCats.some(({ id }) => id === cat));
  return areAllTrue;
};

const findUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createPost = async (email, title, content, categoryIds) => {
  const catIsValid = newPostValidt.validate({ title, content, categoryIds });
  if (catIsValid.error) {
    return ({ err: {
        status: 400,
        message: catIsValid.error.details[0].message,
      },
    });
  }
  const areAllCatsTrue = await areCategoriesTrue(categoryIds);
  if (areAllCatsTrue) {
    const user = await findUser(email);
    const { id: userId } = user;
    const newPost = await BlogPost.create({ userId, title, content });
    const { id } = newPost.dataValues;
    await savePostCategories(id, categoryIds);
    return { id, userId, title, content };  
  }
  return ErrorList.invalidCatsArray;
};

module.exports = {
  createPost,
};
