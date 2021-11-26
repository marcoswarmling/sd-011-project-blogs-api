const { cannotUpdateCategory } = require('../errors');
const { updatePostSchema } = require('../validationSchemas/postSchema');

module.exports = {
  validateNewPostInfo: async ({ title, content, categoryIds }) => {
    const { error } = updatePostSchema.validate({ title, content });
    if (error) return { error };
    
    if (categoryIds) return { error: cannotUpdateCategory };

    return { error: null };
  },
};
