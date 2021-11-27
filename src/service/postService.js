const { BlogPost, Category, PostsCategory } = require('../../models');

const verifyCategoryExist = async (categoryIds) => {
  const getAllCategory = await Category.findAll();

  const result = await getAllCategory.some((value) => categoryIds.includes(value.dataValues.id));
  return result;
};

const createdPost = async ({ title, content, categoryIds }, userId) => {
 const validCategory = await verifyCategoryExist(categoryIds);

  if (!validCategory) {
    return {
      message: '"categoryIds" not found',
    };
  }

  const result = await BlogPost.create({ title, content, userId: userId.id });
  
  const setPostCategory = await categoryIds.map(async (Values) => {
    const newCat = await PostsCategory.create({ categoryId: Values, postId: result.dataValues.id });
    return newCat;
  });
  await Promise.all(setPostCategory);

  return result;
};

const getAllBlogPosts = async () => {
  const result = await BlogPost.findAll({
    include: [{ all: true }],
  });
  return result;
};

const getBlogPost = async (id) => {
  const result = await BlogPost.findOne({
    where: { id },
    include: [{ all: true }],
  });

  if (!result) {
    return {
      message: 'Post does not exist',
    };
  }
  
  return result;
};

module.exports = {
  createdPost,
  getAllBlogPosts,
  getBlogPost,
};