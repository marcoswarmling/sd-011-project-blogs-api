const { User } = require('../models');
const { Schema } = require('../services/validation');
const { ConflictError } = require('../errors');

const create = (userDataInput) => {
  new Schema('createUser').validate(userDataInput);

  return User.create(userDataInput)
    .then(({ dataValues }) => {
      const token = 'obaoba'; // TODO create real jwt
      return { token, createdUser: dataValues };
    })
    .catch((err) => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictError('User already registered');
      }

      throw err;
    });
};

module.exports = {
  create,
};
