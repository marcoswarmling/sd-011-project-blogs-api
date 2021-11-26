const { Categories } = require('../models/index');

const registerCategory = async (name) => {
  const result = await Categories.create({ name });
  const registeredCat = {
    id: result.id,
    name: result.name,
  };
  return registeredCat;
};

module.exports = {
  registerCategory,
};
