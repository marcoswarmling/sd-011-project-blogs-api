const { BlogPost, Category } = require('../models');
const { hasCategories } = require('../helpers/categoryHelper');
const { getUsers, getUser } = require('../helpers/userHelper');
const errors = require('../schemas/errorsSchema');

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });

  if (!post) throw errors.post.notFound;

  const user = await getUser(post.userId);

  return { ...post.dataValues, user: user.dataValues };
};

const getPostBasicInfo = async (id) => {
  const post = await BlogPost.findOne({ where: { id } });

  return post;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });

  const userIds = posts.map(({ userId }) => userId);
  const users = await getUsers(userIds);

  return posts.map((post, index) => ({ ...post.dataValues, user: users[index] }));
};

module.exports = {
  create: async (post) => {
    const validCategories = await hasCategories(post.categoryIds);

    if (!validCategories) throw errors.post.categoryNotFound;

    const newPost = await BlogPost.create(post);

    return newPost;
  },

  getAll,

  getById,

  getPostBasicInfo,

  update: async (id, { title, content }) => {
    const post = await getPostBasicInfo(id);

    await post.update({ title, content });

    const updatedPost = await getById(id);

    return updatedPost;
  },

  delete: async (id) => {
    await BlogPost.destroy({ where: { id } });
  },

  search: async (searchTerm) => {
    const posts = await getAll();

    if (searchTerm.length === 0) return posts;

    const filteredPosts = posts.filter(({ title, content }) => (
      title.includes(searchTerm) || content.includes(searchTerm)
    ));

    return filteredPosts;
  },
};
