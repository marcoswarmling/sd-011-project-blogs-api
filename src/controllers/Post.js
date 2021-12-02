const { BlogPost } = require('../models');
const { Schema } = require('../services/validation');
const { ConflictError, ValidationError, NotFoundError } = require('../errors');

const getDisplayResultFromModelResult = ({ dataValues }) => dataValues;

const mapModelResultToDisplayResult = (result) => result.map(getDisplayResultFromModelResult);

const create = (postDataInput) => {
  new Schema('createPost').validate(postDataInput);

  return BlogPost.create(postDataInput)
    .then(getDisplayResultFromModelResult)
    .catch((err) => {
      console.log(err);

      throw err;
    });
};

module.exports = {
  create,
};
