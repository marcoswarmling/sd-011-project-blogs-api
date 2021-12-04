const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../models');
const { Schema } = require('../services/validation');
const { ValidationError, InternalError } = require('../errors');
const config = require('../config/config');

// const getDisplayResultFromModelResult = ({ dataValues }) => dataValues;

// const mapModelResultToDisplayResult = (result) => result.map(getDisplayResultFromModelResult);

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

module.exports = {
  create,
};
