const { BlogPost, Categorie, User } = require('../models');

const newPost = async (title, content, categoryIds) => {
  const createdPost = await BlogPost.create({ title, content, categoryIds });

  // await categoryIds.map(async (id) => {
  //   await PostsCategorie.create({ postId: createdPost.dataValues.id, categoryId: id });
  // }); 

  return createdPost;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({ 
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });

  const postsToArray = posts.map((post) => post.dataValues);

  return postsToArray;
};

module.exports = {
  newPost,
  getAll,
};
