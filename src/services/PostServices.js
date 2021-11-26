const { BlogPost, User, Category } = require('../models');

const { postSchema } = require('../validationSchemas/postSchema');
const { validateCategories } = require('../helpers/validateCategories');
const { categoryNotFound, postNotfound } = require('../errors');

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

      await Promise.all([post.setUser(user), post.setCategories(categoryIds)]);

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
};
