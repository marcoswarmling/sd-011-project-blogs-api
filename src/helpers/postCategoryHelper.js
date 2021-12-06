const postCategoryService = require('../services/postCategoryService');

module.exports = {
  createPostsCategories: async (postId, categoryIds) => {
    const createPostCategoryTasks = [];

    for (let index = 0; index < categoryIds.length; index += 1) {
      const categoryId = categoryIds[index];

      createPostCategoryTasks.push(postCategoryService.create({ postId, categoryId }));
    }

    await Promise.all(createPostCategoryTasks);
  },
};