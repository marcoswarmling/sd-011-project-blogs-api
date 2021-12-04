const { BlogPost, User, Category } = require('../models');

async function createPostInDB({ userId, title, content, categoryIds }) {
  const { dataValues } = await BlogPost.create({ userId, title, content, categoryIds });

  return {
    id: dataValues.id,
    title: dataValues.title,
    content: dataValues.content,
    userId: dataValues.userId,
  };
}

async function getAllPostsInDB() {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' }, 
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  console.log(posts);
  return posts;
}

module.exports = {
  createPostInDB,
  getAllPostsInDB,
};