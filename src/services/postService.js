const { BlogPost, Categorie, PostsCategorie } = require('../../models');

const postRegister = async (title, categoryIds, content, userId) => {
  const findCategories = await Categorie.findAll();
  const verify = await findCategories.some((value) => categoryIds.includes(value.dataValues.id));
  if (!verify) {
    return ({ message: '"categoryIds" not found' });
  }

  const newPost = await BlogPost.create({ userId, title, content });

  categoryIds.forEach(async (value) => { 
    await PostsCategorie.create({ 
      postId: newPost.id, 
      categoryId: value,
    });
  });
  
  return newPost;
};

const getAllPost = async () => {
  const allPost = await BlogPost.findAll({ include: [{ all: true }] });
  if (!allPost) {
    return ({ message: 'No posts register' });
  }
  return allPost; 
};

module.exports = {
  postRegister,
  getAllPost,
};
