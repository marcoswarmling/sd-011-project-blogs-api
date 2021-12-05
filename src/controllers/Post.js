const Sequelize = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');
const { Schema } = require('../services/validation');
const { ValidationError, InternalError, NotFoundError, AuthorizationError } = require('../errors');
const config = require('../config/config');

const getDisplayResultFromModelResult = ({ dataValues }) => dataValues;

const mapModelResultToDisplayResult = (result) => result.map(getDisplayResultFromModelResult);

const includeUserAndCategories = [
  {
    model: User,
    as: 'user',
  },
  {
    model: Category,
    as: 'categories',
    through: { attributes: [] },
  },
];

const rawCreatePost = (rawValidatedInput) => BlogPost.create({
  title: rawValidatedInput.title,
  content: rawValidatedInput.content,
  userId: rawValidatedInput.userId,
});

const create = async (postDataInput) => {
  new Schema('createPost').validate(postDataInput);
  const transaction = await new Sequelize(config.development).transaction();

  try {
    const { dataValues } = await rawCreatePost(postDataInput);

    const relationRecords = postDataInput.categoryIds.map((categoryId) => ({
      categoryId,
      postId: dataValues.id,
    }));
    await PostCategory.bulkCreate(relationRecords);
    await transaction.commit();
    return dataValues;
  } catch (err) {
    if (err.name === 'SequelizeForeignKeyConstraintError') {
      transaction.rollback();
      throw new ValidationError('"categoryIds" not found'); // TODO usar not found
    }
    throw new InternalError(err);
  }
};

const getAll = () => BlogPost.findAll({
  include: includeUserAndCategories,
})
  .then(mapModelResultToDisplayResult);

const getById = (id) => BlogPost.findOne({
  where: { id },
  include: includeUserAndCategories,
})
  .then((foundPost) => {
    if (!foundPost) throw new NotFoundError('Post does not exist');

    return getDisplayResultFromModelResult(foundPost);
  });

async function getPostAndValidateAuthor(id, userId) {
  const targetPost = await getById(id);

  if (targetPost.userId !== userId) {
    throw new AuthorizationError('Unauthorized user');
  }
  return targetPost;
}

const editById = async ({ id, userId, newContentInput }) => {
  new Schema('editPost').validate(newContentInput);

  const targetPost = await getPostAndValidateAuthor(id, userId);

  await BlogPost.update(newContentInput, {
    where: { id },
  });

  return { ...targetPost, ...newContentInput };
};

module.exports = {
  create,
  getAll,
  getById,
  editById,
};
