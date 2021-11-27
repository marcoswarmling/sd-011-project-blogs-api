const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const { postSchema } = require('../validationSchemas/postSchema');
const { validateCategories } = require('../helpers/validateCategories');
const { validateNewPostInfo } = require('../helpers/validateNewPostInfo');
const {
  categoryNotFound,
  postNotfound,
  unauthorized,
} = require('../errors');

module.exports = {
  create: async ({ title, content, categoryIds, userId }) => {
    try {
      const { error } = postSchema.validate({ title, content, categoryIds, userId });
      if (error) return { error };

      const valid = await validateCategories(categoryIds);
      if (!valid) return { error: categoryNotFound };

      const [post, user] = await Promise.all([
        BlogPost.create({ title, content, userId }),
        User.findByPk(userId),
      ]);

      await Promise.all([
        post.setUser(user),
        post.setCategories(categoryIds),
      ]);

      return { post };
    } catch (error) {
      return { error };
    }
  },
  index: async () => {
    try {
      const posts = await BlogPost.findAll({
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories' },
        ],
      });
      if (!posts) return { error: true };
  
      return { posts };
    } catch (error) {
      return { error };
    }
  },
  getPostById: async (id) => {
    try {
      if (!id) return { error: postNotfound };
  
      const post = await BlogPost.findByPk(id, {
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories' },
        ],
      });
      if (!post) return { error: postNotfound };
  
      return { post };
    } catch (error) {
      return { error };
    }
  },
  updatePost: async (id, { title, content, categoryIds = null }, userId) => {
    try {
      const { error } = await validateNewPostInfo({ title, content, categoryIds });
      if (error) return { error };
  
      const post = await BlogPost.findByPk(id, {
        include: { model: Category, as: 'categories' },
      });
      if (!post) return { error: postNotfound };
      if (post.userId !== userId) return { error: unauthorized };
  
      await BlogPost.update({ title, content }, { where: { id } });

      const newPostData = await BlogPost
        .findByPk(id, { include: { model: Category, as: 'categories' } });
  
      return { post: newPostData };
    } catch (error) {
      return { error };
    }
  },
  deletePost: async (id, userId) => {
    try {
      if (!id) return { error: postNotfound };

      const post = await BlogPost.findByPk(id);

      if (!post) return { error: postNotfound };

      if (post.userId !== userId) return { error: unauthorized };

      await post.destroy();

      return { error: null };
    } catch (error) {
      return { error };
    }
  },
  getPostBySearchTerm: async (searchTerm) => {
    try {
      const search = `%${searchTerm}%` || '%';

      const posts = await BlogPost.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.like]: search } },
            { content: { [Op.like]: search } },
          ],
        },
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories' },
        ] });
  
      if (!posts) return { posts: [] };
  
      return { posts };
    } catch (error) {
      return { error };
    }
  },
};
