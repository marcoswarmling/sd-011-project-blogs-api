const { BlogPost, Category } = require('../models');
const { hasCategories } = require('../helpers/categoryHelper');
const { getUsers, getUser } = require('../helpers/userHelper');
const errors = require('../schemas/errorsSchema');

module.exports = {
  create: async (post) => {
    const validCategories = await hasCategories(post.categoryIds);

    if (!validCategories) throw errors.post.categoryNotFound;

    const newPost = await BlogPost.create(post);

    return newPost;
  },

  getAll: async () => {
    const posts = await BlogPost.findAll({
      include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
    });

    const userIds = posts.map(({ userId }) => userId);
    const users = await getUsers(userIds);

    return posts.map((post, index) => ({ ...post.dataValues, user: users[index] }));
  },

  getById: async (id) => {
    const post = await BlogPost.findOne({
      where: { id },
      include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
    });

    const user = await getUser(post.userId);

    return { ...post.dataValues, user: user.dataValues };
  },
};
