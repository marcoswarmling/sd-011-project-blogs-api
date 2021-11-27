const { nameIsRequired } = require('../err');

const verifyName = (name) => {
  if (!name || name.length === 0) {
    return nameIsRequired;
  }
  return null;
};

module.exports = {
  verifyName,
};
