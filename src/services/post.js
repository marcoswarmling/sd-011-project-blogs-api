const { ForeignKeyConstraintError } = require('sequelize');
const AppError = require('../errorHandler/AppError');
const httpCodes = require('../constants/httpCodes.json');
const errorMessages = require('../constants/errorMessages.json');

const {
  BlogPost,
  Category,
  User,
  PostCategory,
  sequelize,
} = require('../models');
const ajv = require('../schemas/validation');

const doCreatePost = async (newPost, categoryIds, t) => {
  try {
    const createdPost = await BlogPost.create({ ...newPost }, { transaction: t });
    await Promise.all(categoryIds.map(async (categoryId) =>
        PostCategory.create({ postId: createdPost.id, categoryId }, { transaction: t })));
    await t.commit();
    return createdPost;
  } catch (error) {
    await t.rollback();
    if (error instanceof ForeignKeyConstraintError) {
      throw new AppError(httpCodes.HTTP_BAD_REQUEST, errorMessages.CATEGORY_NOT_FOUND);
    }
  }
};

exports.createPost = async ({ categoryIds, ...newPost }) => {
  const validate = ajv.getSchema('posts');
  const isValid = validate({ categoryIds, ...newPost });
  if (isValid) {
    const t = await sequelize.transaction();
    doCreatePost(newPost, categoryIds, t);
  }
  throw new AppError(httpCodes.HTTP_BAD_REQUEST, validate.errors[0].message);
};

exports.getAllPosts = async () =>
  BlogPost.findAll({
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
      {
        model: User,
        as: 'user',
        attributes: ['id', 'email', 'image', 'displayName'],
      },
    ],
  });
