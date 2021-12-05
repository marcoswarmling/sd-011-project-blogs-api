const Sequelize = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');
const { Schema } = require('../services/validation');
const { ValidationError, InternalError, NotFoundError } = require('../errors');
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

  const { dataValues } = await rawCreatePost(postDataInput);

  try {
    const relationRecords = postDataInput.categoryIds.map((categoryId) => ({
      categoryId,
      postId: dataValues.id,
    }));
    await PostCategory.bulkCreate(relationRecords);
    await transaction.commit();
    return dataValues;
  } catch (err) {
    if (err.name === 'SequelizeForeignKeyConstraintError') {
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

module.exports = {
  create,
  getAll,
  getById,
};
