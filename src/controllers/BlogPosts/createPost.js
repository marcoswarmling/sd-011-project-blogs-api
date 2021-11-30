const { BlogPost, PostCategory } = require('../../models');

const { verifyToken } = require('../../jwt');
const verifyFields = require('../../validations/verifyFields');
const { rules } = require('../../validations/requestsParams/blogPost');
const categoryIdIsValid = require('../../validations/categoryIdIsValid');

const createPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { authorization: token } = req.headers;

  try {
    const { userId } = verifyToken(token);
    verifyFields({ title, content, categoryIds }, rules);
    await categoryIdIsValid(categoryIds);
  
    const createdPost = await BlogPost.create({ title, content, userId });

    categoryIds.forEach(async (categoryId) => 
      PostCategory.create({ categoryId, postId: createPost.id }));

    res.status(201).json(createdPost);
  } catch (error) {
    next(error);
  }
};

module.exports = createPost;
