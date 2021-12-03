const { Categories } = require('../models/index');
const { CREATED } = require('../utils/statusMessage');

const registerCategory = async (name) => {
  const result = await Categories.create({ name });
  console.log(result);
  const registeredCat = {
    id: result.id,
    name: result.name,
  };
  return { status: CREATED, message: registeredCat };
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