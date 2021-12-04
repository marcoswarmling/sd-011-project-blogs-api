const { BlogPosts, Users, PostsCategories, Categories } = require('../models');

const serviceGetAllCategories = async () => {
  const posts = await BlogPosts.findAll();
  const data = await Promise.all(posts.map(async (post) => {
    const userPost = await Users.findByPk(post.userId);
    const categoryPosts = await PostsCategories
      .findAll({ attributes: ['categoryId'], where: { postId: post.id } });
    const ids = categoryPosts.map((c) => c.categoryId);
    const categories = await Categories.findAll({ where: { id: ids } });
    const category = categories.map((c) => ({ id: c.id, name: c.name }));
    console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBB', category);
    const result = { ...post.dataValues, user: { ...userPost.dataValues }, categories: category };
    console.log('CCCCCCCCCCCCCCCCCCCCC', result);
    return result;
  }));
  
  return data;
};

module.exports = serviceGetAllCategories;