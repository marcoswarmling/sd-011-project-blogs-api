const newPostValidate = require('../helpers/newPostValidate');
const { BlogPost, PostsCategory, User, Category } = require('../models');

const create = async (object) => {
  const { categoryIds, ...post } = object;
  const validation = await newPostValidate(object);

  if (validation) return validation;

  const { dataValues } = await BlogPost.create(post);
  await Promise.all(categoryIds.map(async (id) => {
    const postsCategories = await PostsCategory.create(
      { categoryId: id, postId: dataValues.id }, 
      { fields: ['categoryId', 'postId'] },
    );
    return postsCategories;
  }));

  return { code: 201, post: dataValues };
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return posts;
};

module.exports = {
  create,
  getAll,
};