const { User } = require('../models');

const create = (userDataInput) => {
  // validate user input;

  return User.create(userDataInput)
    .then(({ dataValues }) => {
      const token = 'obaoba'; // create real jwt
      return { token, createdUser: dataValues };
    })
    .catch((err) => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        // throw error because must be unique;
      }

      throw err;
    });
};

module.exports = {
  create,
};
