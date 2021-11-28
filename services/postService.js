const { BlogPost, Category, User } = require('../models');
const validate = require('../validations/postValidations');
const validateCategories = require('../validations/categoryValidations');

const getAllCategoriesById = async (categories) => {
  const promiseCategories = categories.map((id) => Category.findByPk(id));
  return Promise.all(promiseCategories);
};

const validateCategory = async (categories) => {
  const resolvedCategories = await getAllCategoriesById(categories);
  resolvedCategories.forEach((category) => {
    validateCategories.categoryExists(category);
  });
};

const newPost = async (payload) => {
  await validateCategory(payload.categoryIds);
  return BlogPost.create(payload);
};

const getPosts = () => BlogPost.findAll({
  include: [
    { model: User, as: 'user' },
    {
      model: Category,
      as: 'categories',
      through: {
        attributes: {
          exclude: ['PostsCategory', 'postId', 'categoryId'],
        },
      },
    },
  ],
});

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user' },
      {
        model: Category,
        as: 'categories',
        through: {
          attributes: {
            exclude: ['PostsCategory', 'postId', 'categoryId'],
          },
        },
      },
    ],
  });
  validate.post(post);
  return post;
};

module.exports = {
  newPost,
  getPosts,
  getPostById,
};