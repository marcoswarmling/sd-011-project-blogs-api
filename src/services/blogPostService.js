const { BlogPost } = require('../../models');
const { invalidBlogPostReqBody, validateCategoryArray } = require('./helpers');

const create = async ({ title, categoryIds, content, id: userId }) => {
  const invalidReqBody = invalidBlogPostReqBody({ title, content, categoryIds });
  const { statusCode, errorMessage } = invalidReqBody;
  if (invalidReqBody) return { statusCode, responseMessage: errorMessage };
  
  const categoriesDoesntExist = await validateCategoryArray(categoryIds);
  console.log(categoriesDoesntExist);
  if (categoriesDoesntExist) return { statusCode: 400, responseMessage: categoriesDoesntExist };

  const newPost = await BlogPost.create({ title, content, userId });

  await newPost.setCategories(categoryIds);

  return { responseMessage: newPost, statusCode: 201 };
};

module.exports = {
  create,
};