const { Categories } = require('../models/index');

const registerCategory = async (name) => {
  const result = await Categories.create({ name });
  const registeredCat = {
    id: result.id,
    name: result.name,
  };
  return registeredCat;
};

const getAll = async () => {
  const result = await Categories.findAll();
  if (!result) throw new Error('No category found');
  return result;
};

module.exports = {
  registerCategory,
  getAll,
};
