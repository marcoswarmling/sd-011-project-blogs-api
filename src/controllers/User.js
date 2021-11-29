const { User } = require('../models');

const create = (userDataInput) => {
  // validate user input;

  return User.create(userDataInput)
    .then((_queryResult) => {
      console.log(_queryResult);
      const token = 'obaoba';
      return { token };
    });
};

module.exports = {
  create,
};
