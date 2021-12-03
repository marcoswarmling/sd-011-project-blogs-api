const { BlogPost } = require('../models');

async function createPostInDB({ userId, title, content, categoryIds }) {
  const { dataValues } = await BlogPost.create({ userId, title, content, categoryIds });
  console.log('Retorno::::::::::::::::::::::::::::', dataValues);
  return {
    id: dataValues.id,
    title: dataValues.title,
    content: dataValues.content,
    userId: dataValues.userId,
  };
}

module.exports = {
  createPostInDB,
};