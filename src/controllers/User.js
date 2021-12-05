const { User } = require('../models');

// user create & token validation
const create = (userDataInput) => 
  User.create(userDataInput).then((_queryResult) => {
      console.log(_queryResult);
      const token = 'token';
      return { token };
  });

module.exports = create;
