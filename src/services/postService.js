const { BlogPost, Category } = require('../models');
const { hasCategories } = require('../helpers/categoryHelper');
const { getUsers } = require('../helpers/userHelper');
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
};
