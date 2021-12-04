const { BlogPost } = require('../models');

const newPost = async (title, content, categoryIds) => {
  const createdPost = await BlogPost.create({ title, content, categoryIds });

  // await categoryIds.map(async (id) => {
  //   await PostsCategorie.create({ postId: createdPost.dataValues.id, categoryId: id });
  // }); 

  return createdPost;
};

// const getAll = async () => {
//   const categories = await Categorie.findAll();

//   const categoriesToArray = categories.map((categorie) => categorie.dataValues);

//   return categoriesToArray;
// };

module.exports = {
  newPost,
  // getAll,
};
