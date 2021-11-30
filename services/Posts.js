const newPostValidate = require('../helpers/newPostValidate');
const updatePostValidate = require('../helpers/updatePostValidate');
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

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  if (post) return { code: 200, post: post.dataValues };

  return { code: 404, message: 'Post does not exist' };
};

const update = async (object, id, userId) => {
  const { dataValues } = await BlogPost.findByPk(id);

  const validation = updatePostValidate(object);

  if (validation) return validation;
  if (dataValues.userId !== userId) return { code: 401, message: 'Unauthorized user' };

  await BlogPost.update(object, { where: { id } }, {
    include: [
      { model: Category, as: 'categories' },
    ],
  });

  const post = await BlogPost.findByPk(id, {
    include: [
      { model: Category, as: 'categories' },
    ],
  });

  if (post) return { code: 200, post };

  return { code: 404, message: 'Post does not exist' };
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};