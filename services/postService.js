const { BlogPost, PostsCategorie } = require('../models');

const createPostCategoryAssociation = (postId, categoryIds) => {
  const result = categoryIds.map((categoryId) => ({
      postId,
      categoryId,
    }));

  return result;
};

const createPost = async (title, content, userId, categoryIds) => {
  try {
    const postData = await BlogPost
    .create({ title, content, userId });

    const { id } = postData;
    const postCategoryAssociation = createPostCategoryAssociation(id, categoryIds);

    await PostsCategorie.bulkCreate(postCategoryAssociation);
    
    return {
      id,
      userId,
      title,
      content,
    };
  } catch (e) {
    return { message: '"categoryIds" not found' };
  }
};

module.exports = { 
  createPost,
};
