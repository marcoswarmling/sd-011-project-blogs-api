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

const getPostById = async (id) => {
  const findPost = await BlogPost.findOne({
    where: { id },
    include: [{ all: true }],
  });

  if (!findPost) {
    return { message: 'Post does not exist' };
  }

  return findPost;
};

module.exports = {
  postRegister,
  getAllPost,
  getPostById,
};
