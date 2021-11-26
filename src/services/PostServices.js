const { BlogPost, User } = require('../models');

const { postSchema } = require('../validationSchemas/postSchema');
const { validateCategories } = require('../helpers/validateCategories');
const { categoryNotFound } = require('../errors');

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

      await Promise.all([post.setAuthor(user), post.setCategories(categoryIds)]);

      return { post };
    } catch (error) {
      return { error };
    }
  },
};
