const { User, BlogPost, Category, PostsCategory } = require('../models');

const createPost = async (categoryIds, postData) => {
  const existingCategory = await Category.findOne({ where: { id: categoryIds } });

  if (!existingCategory) return { code: 'badRequest', message: '"categoryIds" not found' };

  const { dataValues: { createdAt, updatedAt, ...newPost } } = await BlogPost.create(postData);

  categoryIds.forEach(async (id) => PostsCategory.create({ postId: newPost.id, categoryId: id }));

  return newPost;
};

const getPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'User' }, // há alguma forma de renomear attributos para essa referencia?
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return allPosts.map((post) => {
    // isso aqui não tá legal!
    const changedPost = post.dataValues;
    changedPost.published = post.createdAt;
    changedPost.updated = post.updatedAt;
    changedPost.user = post.User;
    delete changedPost.createdAt;
    delete changedPost.updatedAt;
    delete changedPost.User;

    return changedPost;
  });
};

module.exports = {
  createPost,
  getPosts,
};
