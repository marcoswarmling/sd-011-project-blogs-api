const { PostsCategories } = require('../models');

async function addPostsCategories(postId, arrayCtg) {
  await arrayCtg.forEach((categoryId) => {
    PostsCategories.create({ postId, categoryId });
  });
}

module.exports = addPostsCategories;
